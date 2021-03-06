// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Users = sequelize.define('users', {
    usersId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      // type: DataTypes.INTEGER,
      // primaryKey: true,
      // defaultValue: Sequelize.literal('nextval(\'users_users_id_seq\'::regclass)'),
      // allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      field: 'title',
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
  }, {
    tableName: 'users',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Users.associate = (models) => {
    Users.belongsTo(models.companies, {
      foreignKey: {
        name: 'companiesIdKey',
        field: 'companies_id',
      },
      targetKey: 'companiesId',
      as: 'company',
    });
  };

  return Users;
};
