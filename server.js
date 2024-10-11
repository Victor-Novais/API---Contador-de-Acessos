const express = require("express");
const app = express();
const connectDB = require("./config/db");
const accessRoutes = require("./routes/accessRoutes");

connectDB();

app.use(express.json());

app.use("/api", accessRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
