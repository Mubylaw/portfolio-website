const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  avatar: {
    type: String
  },
  galleryPhoto: {
    type: String
  }
});

const Users = mongoose.model('user', UserSchema);

module.exports = Users;
