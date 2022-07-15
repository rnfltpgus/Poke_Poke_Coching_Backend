const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res, next) => {
  const email = await User.find({}).lean();

  if (email) {
    res.json({ ok: true, status: 200, email: email });
  }
});

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

  return res.json({ ok: true, state: 200, message: 'success' });
});

module.exports = router;
