// module.exports = function(sequelize, DataTypes) {
//     var Members = sequelize.define("Members", {
//       text: DataTypes.STRING,
//       complete: DataTypes.BOOLEAN
//     });
//     return Members;
//   };

module.exports = function(Sequelize, DataTypes) {
  
	var User = Sequelize.define('User', {
		id: { 
			autoIncrement: true, 
			primaryKey: true, 
			type: DataTypes.INTEGER
		},
		name: { 
			type: DataTypes.STRING,
			notEmpty: true
		},
		// username: {                    
		// 	type:DataTypes.TEXT  
		// },

		// about - don't need anything from page
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
    	// skillsList: {
      	// 	type: DataTypes.STRING // should this be a string? 
		// },
		phoneNumber : {
			type: DataTypes.INTEGER
		},
		city: {
			type: DataTypes.STRING
		},
		state: {
			type: DataTypes.STRING
		}, 
		hourlyWage: {
			type: DataTypes.INTEGER
		}
});
	User.associate = (models) => {
		User.belongsToMany(models.Skill, {
			through: 'UserSkill',
			onDelete: 'CASCADE',
		})
	}
	return User;

}
  