export default async function (context, req) {
  context.log("Ping endpoint hit");

  return {
    status: 200,
    jsonBody: {
      message: "pong",
      time: new Date().toISOString()
    }
  };
}
