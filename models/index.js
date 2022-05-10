const User = require('./User');
const Pigs = require('./Pigs');
const Money = require('./Money');
const Transaction = require('./Transaction');

Pigs.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Pigs, {
  foreignKey: 'user_id'
});

Transaction.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Transaction, {
  foreignKey: 'user_id'
});

Transaction.belongsTo(Money, {
  foreignKey: 'money_id',
  onDelete: 'CASCADE'
});

Money.hasMany(Transaction, {
  foreignKey: 'money_id'
})

Money.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasOne(Money, {
  foreignKey: 'user_id'
});

module.exports = {
  User,
  Pigs,
  Money,
  Transaction
};