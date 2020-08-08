/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const controller = require('../controller');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Boltt-DB-Server' });
});

router.get('/user/balance/:address', async (req, res) => {
  try {
    const result = await controller.getUserBalance(req.params);
    const { data } = result;
    return res.status(200).send({ message: 'User balance is: ', data });
  } catch (e) {
    console.error('Error in /user/balance from the database');
    return res.status(500).send({ message: e.message, data: [] });
  }
});

module.exports = router;
