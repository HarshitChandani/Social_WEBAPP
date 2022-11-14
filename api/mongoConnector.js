const mongoose = require("mongoose");

const connect = async () => {
  createConnection();
  let mongooseInstance = mongoose.connection;

  mongooseInstance.on("connected", () => {
    console.log(
      `Congratulation !! Database is successfully connected on port ${mongooseInstance.port}`
    );
  });
  mongooseInstance.on("open", () => {
    console.log(`Connection is open to all models...`);
  });
  mongooseInstance.on("disconnected", () => {
    console.log("Database disconnected !! Please Restart the server.");
  });
  mongooseInstance.on("error", () => {
    console.log("Atlas Error occured.");
    process.exitCode = 1;
  });
};

const createConnection = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@${process.env.ATLAS_CLUSTER}.jcds8lj.mongodb.net/${process.env.ATLAS_DB}?retryWrites=true&w=majority`,
    {
      dbName: `${process.env.ATLAS_DB}`,
      user: `${process.env.ATLAS_USER}`, // For backward compatibility
      pass: `${process.env.ATLAS_PASS}`, // For backward compatibility
      autoCreate: true, // Auto Call createCollection() method on every model when created.
      autoIndex: true,
      bufferCommands: false, // Cannot use models until connection is created.
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connect;
