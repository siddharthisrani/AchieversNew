const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/uploads", express.static("uploads"));
app.use("/api", require("./routes/leadRoutes"));
app.use("/api", require("./routes/chatRoutes"));
app.use("/api", require("./routes/subscribeRoutes"));
app.use("/api", require("./routes/resume.routes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
