//const { google } = require("googleapis");

module.exports = async function (context, req) {
  try {
    const { name, message } = req.body || {};

    if (!name || !message) {
      context.res = { status: 400, body: { error: "Missing fields" } };
      return;
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1t-BZ6sAla_LSoK9oQhjNTqq0U8VqOGjtB4d6IgRTI7g";
    const range = "Sheet1!A:C";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          new Date().toISOString(),
          name,
          message
        ]]
      }
    });

    context.res = {
      status: 200,
      body: { success: true }
    };
  } catch (err) {
    context.log(err);
    context.res = {
      status: 505,
      body: { error: "Failed to write to Google Sheet" }
    };
  }
};
