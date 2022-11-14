require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./mongoConnector");
const post_routes = require("./routes/postRoutes");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.once("CONNECT_DB", async () => {
  await connect();
});

app.use("/api", post_routes);

app.listen(`${process.env.PORT}`, (req, res) => {
  app.emit("CONNECT_DB");
  console.log("Server started.");
});

// Close mongoose connection when server stopped.
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
