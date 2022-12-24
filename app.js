const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const userRoute = require("./src/routes/userRoute");
app.use("/api/users", userRoute);

const expenseRoute = require("./src/routes/expenseRoute");
app.use("/api/expense", expenseRoute);

const balanceRoute = require("./src/routes/balanceRoute");
app.use("/api/balance", balanceRoute);

const paymentRoute = require("./src/routes/paymentRoute");
app.use("/api/payment", paymentRoute);

const authRoute = require("./src/routes/authRoute");
app.use("/api/auth", authRoute);

app.use("/api/home", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});
