module.exports = function(Sequelize, DataTypes) {
  
	var Skill = Sequelize.define('Skill', {
        name: {
            type: DataTypes.STRING,
        }
    });


    Skill.associate = (models) => {
		Skill.belongsToMany(models.User, {
			through: 'UserSkill',
			onDelete: 'CASCADE',
		})
    }
    return Skill;
};

module.exports = function(Sequelize, DataTypes) {
  
	var Skill = Sequelize.define('Skill', {
        name: {
            type: DataTypes.STRING,
        }
    });


    Skill.associate = (models) => {
		Skill.belongsToMany(models.User, {
			through: 'UserSkill',
			onDelete: 'CASCADE',
		})
    }
    return Skill;
};