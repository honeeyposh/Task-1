const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const profileRoute = require("./route/profile");
const rateLimiter = rateLimit({
  window: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: false,
    message: "Too many requests!!!",
  },
});
app.use(rateLimiter);
app.use(profileRoute);
app.listen(8000, () => {
  console.log("server listening on port 8000");
});
