const mongoose = require('mongoose');
const { success, error } = require('consola');
const { DB, PORT } = require('./index');

mongoose.Promise = global.Promise;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    family: 4,
  })
  .then(() =>
    success({
      message: `Database Server connected on ${DB} \n \t\tEXPRESS PORT---> ${PORT || 3000}.`,
      badge: true,
    })
  )
  .catch((err) => {
    error(err)
  });

module.exports = mongoose;