const db = require('./hr');
const CMD_COLOR = require('../cmd_color_refer');
const { User } = require('../../models');
const { createUser } = require('../../services/user.service');
const { ROLE } = require('../constant');

async function createSampleData() {
  User.findAll({
    limit: 1
  })
    .then(data => {
      if (!data[0]) {
        createUser(
          {
            "full_name": "admin",
            "first_name": "admin",
            "last_name": "admin",
            "email": "admin@gmail.com",
            "password": "admin@123",
            "address": "admin",
            "gender": false,
            "dob": "2003-09-22",
            "start_date": "2020-01-01",
            "role": ROLE.QTV
          }
        );

        createUser(
          {
            "full_name": "kt",
            "first_name": "kt",
            "last_name": "kt",
            "email": "kt@gmail.com",
            "password": "123456789@",
            "address": "kt",
            "gender": false,
            "dob": "2003-09-22",
            "start_date": "2020-01-01",
            "role": ROLE.KT
          }
        );

        createUser(
          {
            "full_name": "HR",
            "first_name": "hr",
            "last_name": "hr",
            "email": "hr@gmail.com",
            "password": "123456789@",
            "address": "hr",
            "gender": false,
            "dob": "2003-09-22",
            "start_date": "2020-01-01",
            "role": ROLE.HR
          }
        );

        createUser(
          {
            "full_name": "Pham Quang Hung",
            "first_name": "Pham",
            "last_name": "Quang Hung",
            "email": "hungbungbu2003@gmail.com",
            "password": "123456789@",
            "address": "Hà Nội",
            "gender": false,
            "dob": "2003-09-22",
            "start_date": "2020-01-01",
            "role": ROLE.NV
          }
        );

      }
    });
  console.log("Dữ liệu mẫu đã được tạo.");
}


const testConnection = (async () => {
  try {
    await db.sync({ alter: true })
      .then(() => {
        createSampleData();
      })
      .catch(err => console.log(err));
    console.log(`${CMD_COLOR.FgGreen}[HR_DB] Connected to HR via Mysql.${CMD_COLOR.Reset}`);
  } catch (error) {
    console.error(`${CMD_COLOR.FgRed}[HR_DB] Unable to connect to the database:\n${error}${CMD_COLOR.Reset}`);
    process.exit(1);
  }
});

module.exports = {
  testConnection: testConnection
}
