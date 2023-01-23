const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use(require('./routes/drinks.route.js'));


mongoose.connect("mongodb+srv://Daim_Vision:9523658254GggG@cluster0.4jugbeq.mongodb.net/drinks", {
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
    console.log('Сервер работает.');
});