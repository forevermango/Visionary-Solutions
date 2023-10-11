<template>
    <div class="sidebar">
      <h2>Customer Info</h2>
      <ul>
        <li @click="selectItem('Add/Edit/Delete')" :class="{ active: selectedItem === 'Add/Edit/Delete' }">Add/Edit/Delete</li>
        <li @click="selectItem('View')" :class="{ active: selectedItem === 'View' }">View</li>
      </ul>
      <h2>Reports</h2>
      <ul>
        <li @click="selectItem('Reports')" :class="{ active: selectedItem === 'Reports' }">Reports</li>
      </ul>
      <ul>
        <li @click="selectItem('Settings')" :class="{ active: selectedItem === 'Settings' }">Settings</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedItem: null,
      };
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item;
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px 0;
    cursor: pointer;
  }
  
  .active {
    background-color: #555;
  }
  </style>
  
