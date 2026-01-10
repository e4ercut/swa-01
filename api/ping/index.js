module.exports = async function (context, req) {
  context.log("Ping function hit");

  context.res = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      message: "pong",
      time: new Date().toISOString()
    }
  };
};
