const express = require("express");
const seriesRouter = require("./src/routes/seriesRouter");
const authRouter = require('./src/routes/authRouter')
const rolesRouter = require('./src/routes/rolesRouter')
const createError = require("./src/errors/createError");
const corsMiddleware = require('./middleware/corsMiddleware')
const app = express();

// middleware
app.use(corsMiddleware)
app.use(express.json());

const port = 5000;

// set routes..
app.use("/series", seriesRouter);
app.use("/auth", authRouter);
app.use("/roles", rolesRouter);


// home handler
app.get("/", (res, rep) => {
    rep.send("welcome for home");
});

// 404 error handler and pass to error handler
app.use((req, res, next) => {
    next(new createError(404, "Not Found"));
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.code || 500);
    res.send({
        status: err.code,
        message: err.message,
        timestamp: Date.now(),
        path: req.originalUrl,
    });
});

app.listen(port, () => {
    console.log("Sever is now listening at port " + port);
});
