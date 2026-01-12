const fs = require("fs");
const path = require("path");

module.exports = async function (context, req) {
  try {
    const { name, message } = req.body || {};

    if (!name || !message) {
      context.res = {
        status: 400,
        body: { error: "Name and message are required" }
      };
      return;
    }

    const filePath = path.join(__dirname, "../data/submissions.csv");
    const timestamp = new Date().toISOString();

    const line = `"${timestamp}","${name}","${message.replace(/"/g, '""')}"\n`;

    fs.appendFileSync(filePath, line);

    context.res = {
      status: 200,
      body: { success: true }
    };
  } catch (err) {
    context.log(err);
    context.res = {
      status: 500,
      body: { error: "Failed to write submission" }
    };
  }
};
