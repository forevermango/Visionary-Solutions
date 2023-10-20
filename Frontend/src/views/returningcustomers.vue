<template>
  <div class="container">
    <div>
      <h1>Customer Search List</h1>

      <!-- Search bar -->
      <div class="input-group mb-3">
        <input v-model="searchQuery" type="text" class="form-control" placeholder="Search by name, email, phone, or birthdate">
        <div class="input-group-append">
          <button class="btn btn-primary" @click="search">Search</button>
        </div>
      </div>

      <!-- Table for customer list -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Birthdate</th>
            <th>Products</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in filteredCustomers" :key="customer.id">
            <td>{{ customer.firstname }}</td>
            <td>{{ customer.lastname }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phoneNumber }}</td>
            <td>{{ customer.birthdate }}</td>
            <td>
              <!-- Button for showing/hiding products -->
              <button class="btn btn-link" @click="toggleProducts(customer)">
                {{ customer.isProductsVisible ? 'Hide Products' : 'Show Products' }}
              </button>
              <ul v-if="customer.isProductsVisible" class="list-group product-list">
                <li class="list-group-item" v-for="product in customer.products" :key="product.id">
                  <div class="product-details">
                    <div class="row">
                      <div class="col-md-6">
                        <strong>Name:</strong> {{ product.name }}
                      </div>
                      <div class="col-md-6">
                        <strong>Item Name:</strong> {{ product.itemname }}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <strong>Price:</strong> ${{ product.itemPrice.toFixed(2) }}
                      </div>
                      <div class="col-md-6">
                        <strong>Quantity:</strong> {{ product.quantity }}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <strong>Description:</strong> {{ product.description }}
                      </div>
                      <div class="col-md-6">
                        <strong>Type:</strong> {{ product.type }}
                      </div>
                    </div>
                    <div class="row" v-if="product.type.includes('Glasses')">
                      <div class="col-md-6">
                        <strong>Brand:</strong> {{ product.brand }}
                      </div>
                    </div>
                    <div class="row" v-else-if="product.type.includes('Contacts')">
                      <div class="col-md-6">
                        <strong>Contacts Brand:</strong> {{ product.contactsBrand }}
                      </div>
                    </div>
                    <div class="row" v-else-if="product.type.includes('Accessories')">
                      <div class="col-md-6">
                        <strong>Accessory Type:</strong> {{ product.accessoryType.join(', ') }}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </td>
            <td>
              <!-- Edit Customer Button -->
              <router-link to="/editcustomer" class="btn btn-primary">
                Edit
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
    return {
      searchQuery: '',
      customers: [
        {
          id: '1',
          firstname: 'Visionary',
          lastname: 'Solutions',
          phonenumber: null,
          email: null,
          birthdate: null,
          products: [
            {
              id: 1,
              itemname: 'Item 1',
              itemPrice: 10.99,
              description: 'Description for Product 1',
              type: 'Glasses',
              brand: 'Some Brand',
            },
            {
              id: 2,
              itemname: 'Item 2',
              itemPrice: 15.99,
              description: 'Description for Product 2',
              type: 'Contacts',
              contactsBrand: 'Acme Contacts',
            },
            {
              id: 3,
              itemname: 'Item 3',
              itemPrice: 5.99,
              description: 'Description for Product 3',
              type: 'Accessories',
              accessoryType: ['Anti-reflective Coating', 'Other'],
            },
          ],
        },
        // Add more customers and their associated products
      ],
    };
  },
  computed: {
    filteredCustomers() {
      const query = this.searchQuery.toLowerCase();
      return this.customers.filter((customer) =>
        customer.firstname.toLowerCase().includes(query) ||
        customer.lastname.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.phonenumber.includes(query) ||
        customer.birthdate.includes(query)
      );
    },
  },
  methods: {
    search() {
      // Add your search logic here
    },
    toggleProducts(customer) {
      customer.isProductsVisible = !customer.isProductsVisible;
    },
  },
};
</script>


<style scoped>
.product-list {
  list-style: none;
  padding: 0;
}

.product-details {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.row {
  margin-bottom: 10px;
}

.col-md-6 {
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  padding: 0 15px;
}
</style>
