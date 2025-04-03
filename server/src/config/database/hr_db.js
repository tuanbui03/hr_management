const db = require('./hr');
const CMD_COLOR = require('../cmd_color_refer');

const testConnection = (async () => {
  try {
    await db.authenticate();
    console.log(`${CMD_COLOR.FgGreen}[HR_DB] Connected to HR via Mysql.${CMD_COLOR.Reset}`);
  } catch (error) {
      console.error(`${CMD_COLOR.FgRed}[HR_DB] Unable to connect to the database:\n${error}${CMD_COLOR.Reset}`);
      process.exit(1);
  }
});

module.exports = {
  testConnection: testConnection
}
