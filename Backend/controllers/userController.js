const User = require('../models/User');

const EmailController = {
    addUser: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            res.json(user);
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
    },
    getAllUsers: async (req, res) => {
        try {
          const user = await User.find();
          res.json(user);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
    },
    getUser: async (req, res) => {
        try {
          const user = await User.find(req.params.userID);
          res.json(user);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
    },
    deleteUser:  async (req, res) => {
        try {
          const user = await User.findByIdAndRemove(req.params.userID);
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          res.json({ message: 'User deleted' });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      },
      updateUser: async (req, res) => {
        try {
          const user = await User.findByIdAndUpdate(
            req.params.userID,
            req.body,
            { new: true }
          );
          if (!user) {
            return res.status(404).json({ error: 'user not found' });
          }
          res.json(user);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      }

}



module.exports = EmailController;
