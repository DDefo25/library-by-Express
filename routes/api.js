const express = require('express');
const booksRouter = require('./books');
const userRouter = require('./user');

const router = express.Router();

router.use('/api', booksRouter);
router.use('/api', userRouter);

module.exports = router;
