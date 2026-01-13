// stringify.js
const fs = require("fs");

const raw = fs.readFileSync("./service-account.json", "utf8");
const json = JSON.parse(raw);

// This outputs ONE LINE JSON
console.log(JSON.stringify(json));
