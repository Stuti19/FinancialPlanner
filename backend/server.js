const express = require("express");
const cors = require("cors");
const planRoutes = require("./routes/plan");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", planRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));