const express = require('express');
const sequelize = require('./config/Db');
const User = require('./models/user');

const app = express();
app.use(express.json());

// Create a user
app.post('/users', async (req, res) => { 
  try {
    const { name, email, age } = req.body;
    const newUser = await User.create({ name, email, age });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//Get all users
app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Sync the database
sequelize.sync({ force: true }).then(() => {
    console.log('Database synced!');
  }).catch(error => {
    console.error('Error syncing database:', error);
  });

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

