'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: 'userId' })
      Comment.belongsTo(models.Song, { foreignKey: 'songId' })

    }
  }
  Comment.init({
    userId: {
      type: DataTypes.INTEGER
    },
    songId: {
      type: DataTypes.INTEGER,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
