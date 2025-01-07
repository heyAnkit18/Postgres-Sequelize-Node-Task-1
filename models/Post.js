const { DataTypes } = require('sequelize');
const sequelize=require('../config/Db');
const User = require('./user');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT
  }
});

User.hasMany(Post);
Post.belongsTo(User);

module.exports = Post;
