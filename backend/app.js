const express = require("express");
const cors = require("cors");
require("dotenv").config();

const healthRouts = require("./routes/healthRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();

app.use(cors());
app.use(express.json());

// Route
app.use("/", healthRouts);
app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
