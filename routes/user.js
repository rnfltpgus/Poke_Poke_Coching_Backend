const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', async (req, res, next) => {
  const { name, email } = req.body;
  const findName = await User.find({ name: name }).lean();
  const findEmail = await User.find({ email: email }).lean();

  if (!name || !email) {
    return;
  }

  if (findName[0] || findEmail[0]) {
    return;
  }

  await new User({
    name: name,
    email: email,
  }).save();

  return res.json({ message: 'success' });
});

module.exports = router;
