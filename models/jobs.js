module.exports = function(sequelize, DataTypes) {
    var Members = sequelize.define("Members", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Members;
  };
  