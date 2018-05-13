module.exports = function(Sequelize, DataTypes) {
  
	var User = Sequelize.define('User', {
		// id: { 
		// 	autoIncrement: true, 
		// 	primaryKey: true, 
		// 	type: DataTypes.INTEGER
		// },
		name: { 
			type: DataTypes.STRING,
			notEmpty: true
		},
		// username: {                    
		// 	type:DataTypes.TEXT  
		// },
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
		phoneNumber: {
			type: DataTypes.TEXT
		},
		city: {
			type: DataTypes.STRING
		},
		state: {
			type: DataTypes.STRING
		}, 
		skillOne: {
			type: DataTypes.STRING
		},
		wageOne: {
			type: DataTypes.STRING
		},
		skillTwo: {
			type: DataTypes.STRING
		},
		wageTwo: {
			type: DataTypes.STRING
		},
		skillThree: {
			type: DataTypes.STRING
		},
		wageThree: {
			type: DataTypes.STRING
		},
});
	// User.associate = (models) => {
	// 	User.belongsToMany(models.Skill, {
	// 		through: 'UserSkill',
	// 		onDelete: 'CASCADE',
	// 	})
	// }
	return User;

} // end of mudule.exports

// removed skills.js and saved to my desktop
  