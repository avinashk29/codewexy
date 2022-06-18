const express = require('express');
const app = express();
const { success, error } = require('consola');

const { PORT } = require('./config');
const { items, customers } = require('./routes');
require('./config/database');


const PORTNO = PORT || 3000;
app.use(express.json());
app.use("/", items, customers )
async function bootstrap() {
  await app.listen(PORTNO, () =>
    success({ message: `SERVER PORT is running on ${PORTNO}`, badge: true })
  );
}

bootstrap();

module.exports = app;