const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

module.exports = () => {
  return mongoose.connect('mongodb://localhost:27017/eligram?replicaSet=rs0');
};
