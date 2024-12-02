

module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        mobile_number: {
            type: DataTypes.STRING(14),
            unique: true,
        },
        email_id: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(50),
        },
        state: {
            type: DataTypes.STRING(50),
        },
        country: {
            type: DataTypes.STRING(50),
        },
        pincode: {
            type: DataTypes.STRING(7),
        },
    }, {
        tableName: 'user',
        timestamps: false,
    });

    return  User;
    
};



