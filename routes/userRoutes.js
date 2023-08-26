const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

// User registration
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });
    // Handle session and response
  } catch (err) {
    // Handle error
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    // Validate login credentials
    const user = await User.findOne({
      where: { username: req.body.username },
    });

    if (!user) {
      // Handle no user found
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      // Handle incorrect password
      return;
    }

    // Handle session and response
  } catch (err) {
    // Handle error
  }
});

// User logout
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
      res.redirect('/');
    });
});
  
module.exports = router;
