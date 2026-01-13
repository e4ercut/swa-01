const { google } = require("googleapis");

module.exports = async function (context, req) {
  try {
    if (!req.body?.name || !req.body?.email) {
      context.res = {
        status: 400,
        body: { error: "Missing name or email" }
      };
      return;
    }

    // Load credentials from env
    const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

    const auth = new google.auth.JWT(
      creds.client_email,
      null,
      creds.private_key.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          req.body.name,
          req.body.email,
          new Date().toISOString()
        ]]
      }
    });

    context.res = {
      status: 200,
      body: { success: true }
    };
  } catch (err) {
    context.log("ERROR:", err);

    context.res = {
      status: 500,
      body: {
        error: err.message
      }
    };
  }
};
