module.exports = {
    //ganti host user dan password kalau mau dideploy
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    //buatdulu db nya
    DB: "authdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };