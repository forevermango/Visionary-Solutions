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
                <ul v-if="customer.isProductsVisible" class="list-group">
                  <li class="list-group-item" v-for="product in customer.products" :key="product.id">
                    <strong>{{ product.name }}</strong>
                    <p>Item Name: {{ product.itemname }}</p>
                    <p>Price: ${{ product.itemPrice.toFixed(2) }}</p>
                    <p>Description: {{ product.description }}</p>
                    <!-- Add more product information as needed -->
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  
  
  
  <script>
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
                name: 'Product 1',
                itemname: 'Item 1',
                itemPrice: 10.99,
                description: 'Description for Product 1',
              },
              {
                id: 2,
                name: 'Product 2',
                itemname: 'Item 2',
                itemPrice: 15.99,
                description: 'Description for Product 2',
              },
            ],
          },
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
                name: 'Product 1',
                itemname: 'Item 1',
                itemPrice: 10.99,
                description: 'Description for Product 1',
              },
              {
                id: 2,
                name: 'Product 2',
                itemname: 'Item 2',
                itemPrice: 15.99,
                description: 'Description for Product 2',
              },
            ],
          },{
            id: '1',
            firstname: 'Visionary',
            lastname: 'Solutions',
            phonenumber: null,
            email: null,
            birthdate: null,
            products: [
              {
                id: 1,
                name: 'Product 1',
                itemname: 'Item 1',
                itemPrice: 10.99,
                description: 'Description for Product 1',
              },
              {
                id: 2,
                name: 'Product 2',
                itemname: 'Item 2',
                itemPrice: 15.99,
                description: 'Description for Product 2',
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

      },
      toggleProducts(customer) {
        customer.isProductsVisible = !customer.isProductsVisible;
      },
    },
  };
  </script>
  