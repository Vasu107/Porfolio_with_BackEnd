const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'replace-with-a-secret'

exports.protectAdmin = (req, res, next) => {
  console.log("Headers:", req.headers);
  console.log("Authorization:", req.headers.authorization);

  let authHeader = req.headers.authorization;

  console.log("Auth Header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

     console.log("Auth Header before split:", authHeader);
    const token = authHeader.split(" ")[1];
    console.log("Extracted Token:", token);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Decoded Token:", decoded);
    console.log("Decoded Token:", decoded);

    req.admin = decoded;
    next();
  } catch (error) {
  console.log("JWT ERROR NAME:", error.name);
  console.log("JWT ERROR MESSAGE:", error.message);

  return res.status(401).json({
    message: error.message,
    type: error.name
  });
}
};
