<template>
  <div class="deletion-confirmation-backdrop">
    <div class="deletion-confirmation">
      <p>Are you sure you want to delete the user?</p>
      <div class="confirmation-buttons">
        <button type="submit" @click="confirmDeletion" class="btn btn-danger">Yes, Delete</button>
        <button @click="cancelDeletion" class="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  methods: {
    confirmDeletion() {
      this.$emit('confirm');
    },
    cancelDeletion() {
      this.$emit('cancel');
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 0 10px;
}
  .deletion-confirmation-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .deletion-confirmation {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 8px;
  }

  .confirmation-buttons {
    margin-top: 20px;
  }
</style>

