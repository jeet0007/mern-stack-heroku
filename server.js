require('dotenv').config({ path: 'config.env' });
const express = require('express');
const path = require('path');
const connectDb = require('./db');
const postRoute = require('./routes/postRoutes');

connectDb();
const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRoute);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    });
    console.log("Running production");
} else {
    app.get('/', (req, res) => {
        res.send("Server is working 😇")
    });
}

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


module.exports = app