// Call config
const { config } = require('dotenv');
const CMD_COLOR = require('./config/cmd_color_refer');
const DB_HR = require('./config/database/hr_db');
const app = require('./app');

config();

(async () => {
    const PORT = process.env.SERVER_PORT || 8000;

    // Kết nối database
    await DB_HR.testConnection();
    
    // Khởi chạy server
    return app.listen(PORT, '0.0.0.0', (error) => {
        if (error) {
            console.log(`${CMD_COLOR.FgRed}[SERVER] Error in server setup${CMD_COLOR.Reset}`);
        } else {
            console.log(`${CMD_COLOR.FgGreen}[SERVER] listening on http://127.0.0.1:${PORT}/${CMD_COLOR.Reset}`);
        }
    });
})();
