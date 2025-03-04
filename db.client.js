const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://postgresql_18729_user:lJglpQz32rGy3Qsbz76j6JCkmaynsq1C@dpg-cv3aq09u0jms739dqk5g-a/postgresql_18729',
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;