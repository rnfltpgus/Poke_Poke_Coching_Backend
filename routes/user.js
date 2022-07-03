const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', async (req, res, next) => {
  const {
    user: { displayName, email },
  } = req.body;
  const findDisPlayName = await User.find({ displayName: displayName }).lean();
  const findEmail = await User.find({ email: email }).lean();

  if (!displayName || !email) {
    return;
  }

  if (findDisPlayName[0] || findEmail[0]) {
    return;
  }

  await new User({
    displayName: displayName,
    email: email,
  }).save();

  return res.json({ message: 'success' });
});

module.exports = router;
