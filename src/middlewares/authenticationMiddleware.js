const admin = require("firebase-admin");

const authenticateUser = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorizationHeader.split("Bearer ")[1];
  admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error(`Error verifiying ID token: ${error}`);
      return res.status(403).json({ error: "Forbidden" });
    });
};

module.exports = {
  authenticateUser,
};
