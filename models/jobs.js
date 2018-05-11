// module.exports = function(sequelize, DataTypes) {
//     var Members = sequelize.define("Members", {
//       text: DataTypes.STRING,
//       complete: DataTypes.BOOLEAN
//     });
//     return Members;
//   };

module.exports = function(sequelize, DataTypes) {
  
	var User = sequelize.define('user', {
		id: { 
			autoIncrement: true, 
			primaryKey: true, 
			type: DataTypes.INTEGER
		},
		name: { 
			type: DataTypes.STRING,
			notEmpty: true
		},
		username: {                    
			type:DataTypes.TEXT  
		},
		about : {
			type: DataTypes.TEXT
		},
		email: { 
			type:DataTypes.STRING, 
			validate: {isEmail:true} 
		},
		password : {
			type: DataTypes.STRING,
			allowNull: false 
		}, 
		last_login: {
			type: DataTypes.DATE
		},
        status: {
			type: DataTypes.ENUM('active','inactive'),
			defaultValue:'active' 
		},
		//any other information that you want to add to sequelize 
    skills: {
      type: DataTypes.STRING // should this be a string? 
    }
});

	return User;

}
  