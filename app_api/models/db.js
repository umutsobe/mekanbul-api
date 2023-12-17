var mongoose = require("mongoose");

var dbUrl = "mongodb://localhost/mekanbul";

mongoose.connect(dbUrl);

mongoose.connection.on("connected", function () {
  console.log("bağlandı");
});
mongoose.connection.on("error", function () {
  console.log("hata");
});
mongoose.connection.on("disconnected", function () {
  console.log("disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close();
  console.log("app closed");
  process.exit(0);
});
