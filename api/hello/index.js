module.exports = async function (context, req) {
  context.log("Hello function hit");

  context.res = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      message: "Hello from a NEW function!",
      mood: "🚀"
    }
  };
};
