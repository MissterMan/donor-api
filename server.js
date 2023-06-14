const express = require("express");
const admin = require("firebase-admin");
const routes = require("./src/routes/route");

// Initialize Firebase Admin SDK
const serviceAccount = require("./src/config/ServiceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
