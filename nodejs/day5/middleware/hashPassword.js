const bcrypt = require('bcryptjs');

const hashPassword = async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
    return;
};

module.exports = hashPassword;