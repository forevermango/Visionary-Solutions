const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Create a new customer
router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read a single customer by ID
router.get('/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a customer by ID
router.put('/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.customerId,
      req.body,
      { new: true }
    );
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a customer by ID
router.delete('/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndRemove(req.params.customerId);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
