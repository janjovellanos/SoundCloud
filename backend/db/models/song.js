'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.User, { foreignKey: 'userId', as: 'Artist' });
      Song.belongsTo(models.Album, { foreignKey: 'albumId' });
      Song.hasMany(models.Comment, { foreignKey: 'songId', onDelete: 'CASCADE', hooks: true });
      Song.belongsToMany(models.Playlist, { through: models.PlaylistSong });
    }
  }
  Song.init({
    userId: {
      type: DataTypes.INTEGER
    },
    albumId: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    description: {
      type: DataTypes.STRING
    },
    audioUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    imageUrl: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
