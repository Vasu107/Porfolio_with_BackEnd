const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");

dotenv.config();
connectToDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('API is running');
});

app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/certifications", require("./routes/certificationRoutes"));
app.use("/api/education", require("./routes/educationRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
