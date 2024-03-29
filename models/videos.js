module.exports = function(sequelize, DataTypes) {

  const videos = sequelize.define(
  "videos",
  {
    video_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    video_file : DataTypes.BLOB,
    video_url: DataTypes.STRING
  },
  {
    freezeTableName: true
  }
);
// video.associate = function(models){
//   console.log(models)
  // video.hasOne(models.events)
// };

  return videos;
}
