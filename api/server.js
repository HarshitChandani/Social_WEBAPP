require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./mongoConnector");
const { default: mongoose } = require("mongoose");
const cookie_parser = require("cookie-parser");
const app = express();

const post_routes = require("./routes/postRoutes");
const email_routes = require("./routes/emailRoutes");
const user_routes = require("./routes/userRoutes");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookie_parser()); // Signed cookie.
app.once("CONNECT_DB", async () => {
  await connect();
});

app.use("/api", post_routes);
app.use("/email", email_routes);
app.use("/user", user_routes);

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
