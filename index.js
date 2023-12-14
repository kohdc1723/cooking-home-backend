require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const serverless = require("serverless-http");
const corsOptions = require("./config/corsOptions");
const connectDb = require("./config/connectDb");

const PORT = process.env.PORT || 3500;

const app = express();

connectDb();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routers
app.use("/api", require("./routes/rootRoutes")); // public
app.use("/api/auth", require("./routes/authRoutes")); // public
app.use("/api/users", require("./routes/usersRoutes")); // private
app.use("/api/preference", require("./routes/preferenceRoutes")); // private
// catch all
app.all("*", (req, res) => {
    res.status(404);

    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
        res.json({ message: "404 not found" });
    } else {
        res.type("txt").send("404 not found");
    }
});

if (process.env.ENVIRONMENT === "serverless") {
    module.exports.handler = serverless(app);
} else {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}