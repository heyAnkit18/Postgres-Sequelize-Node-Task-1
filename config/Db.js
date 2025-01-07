const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Zipaworld", "postgres", "1806", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate() //.authenticate() function to test if the connection is OK:
  .then(() => {
    console.log("Connected to the postgres");
  })
  .catch((err) => {
    console.error("Postgres Not Connected:", err);
  });
module.exports = sequelize;
