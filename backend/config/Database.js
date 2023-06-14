import { Sequelize } from "sequelize";

const db = new Sequelize("iclo_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
