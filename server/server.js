const express = require("express");
const app = express();

const connectDB = require("./config/db");

// Connect Database
connectDB();

// allow us to accept data/ allows the body to receive data
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "welcome to the Budget Vault api..." })
);

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/budgets", require("./routes/budgets"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
