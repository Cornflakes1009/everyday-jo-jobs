module.exports = function(Sequelize, DataTypes) {
  
	var Skill = Sequelize.define('Skill', {
        babysitting: {
            type: DataTypes.INTEGER,
        },
        carDetailing: {
            type: DataTypes.INTEGER,
        },
        carWashing: {
            type: DataTypes.INTEGER,
        },
        dogGrooming: {
            type: DataTypes.INTEGER,
        },
        dogWalking: {
            type: DataTypes.INTEGER,
        },
        dogWatching: {
            type: DataTypes.INTEGER,
        },
        fenceInstallRepair: {
            type: DataTypes.INTEGER,
        },
        guitarLessons: {
            type: DataTypes.INTEGER,
        },
        gutterCleaning: {
            type: DataTypes.INTEGER,
        },
        handyman: {
            type: DataTypes.INTEGER,
        },
        houseCleaning: {
            type: DataTypes.INTEGER,
        },
        landscaping: {
            type: DataTypes.INTEGER,
        },
        lawnCare: {
            type: DataTypes.INTEGER,
        },
        movingAssistance: {
            type: DataTypes.INTEGER,
        },
        movingAssistanceWithTruck: {
            type: DataTypes.INTEGER,
        },
        paintingArtistic: {
            type: DataTypes.INTEGER,
        },
        paintingGeneral: {
            type: DataTypes.INTEGER,
        },
        pestRemoval: {
            type: DataTypes.INTEGER,
        },
        photographer: {
            type: DataTypes.INTEGER,
        },
        sewing: {
            type: DataTypes.INTEGER,
        },
        upholsteryRepair: {
            type: DataTypes.INTEGER,
        },
        professionalHugging: {
            type: DataTypes.INTEGER,
        },
        
    });


    Skill.associate = (models) => {
		Skill.belongsToMany(models.User, {
			through: 'UserSkill',
			onDelete: 'CASCADE',
		})
    }
    return Skill;
};
