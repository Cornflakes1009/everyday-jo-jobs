// module.exports = function(sequelize, DataTypes) {
//     var Members = sequelize.define("Members", {
//       text: DataTypes.STRING,
//       complete: DataTypes.BOOLEAN
//     });
//     return Members;
//   };
//added bcrypt for passport 
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");


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

		// about - don't need anything from page
		about : {
			type: DataTypes.TEXT
		},
		//the email cannot be null and must be a proper email 
		//before creation
		email: { 
			type:DataTypes.STRING, 
			allowNull: false,
			unique: true,
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
		phoneNumber: {
			type: DataTypes.TEXT
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

// Creating a custom method for our User model. 
//This will check if an unhashed password entered by the 
//user can be compared to the hashed password stored in our database
User.prototype.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};
// Hook  automatic method for when a User is created, we will automatically hash their password
User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});
return User;

User.associate = (models) => {
		User.belongsToMany(models.Skill, {
			through: 'UserSkill',
			onDelete: 'CASCADE',
		})
	}
	return User;

}
  