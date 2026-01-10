const fs = require("fs");
const path = require("path");

module.exports = async function (context, req) {
  try {
    const filePath = path.join(__dirname, "../data/message.txt");
    const content = fs.readFileSync(filePath, "utf8");

    context.res = {
      status: 200,
      body: {
        message: content
      }
    };
  } catch (err) {
    context.res = {
      status: 500,
      body: {
        error: "Failed to read file"
      }
    };
  }
};
