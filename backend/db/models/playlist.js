'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const playlistSongMap = {
        foreignKey: 'playlistId',
        otherKey: 'songId',
        through: 'PlaylistSong'
      }
      Playlist.belongsTo(models.User, { foreignKey: 'userId' });
      Playlist.belongsToMany(models.Song, playlistSongMap)
    }
  }
  Playlist.init({
    userId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};
