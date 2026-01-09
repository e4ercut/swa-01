module.exports = async function (context, req) {
  context.log("Ping endpoint hit");

  context.res = {
    status: 200,
    body: {
      message: "pong",
      time: new Date().toISOString()
    }
  };
};
