const mysql = require("mysql2/promise");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "finaljs",
  waitForConnections: true,
  connectionLimit: 10,
  queueTimeout: 0,
});

async function testConnection() {
  try {
    const connection = await dbPool.getConnection();
    console.log("Database connected successfully");
    connection.release();  // release the connection after use
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

testConnection();

module.exports = dbPool;
