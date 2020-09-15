const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");

const app = express();

// Setup Logger
app.use(
    morgan(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/api/picture/:id", async(req, res) => {
    //指定されたidの絵のデータを返す
    try {
        const id = req.params.id;


        const picture = await db
            .select()
            .where({
                id: id
            })
            .from("pictures");
        res.set("Access-Control-Allow-Origin", "*");
        res.json(picture);
    } catch (err) {
        console.error("Error loading locations!", err);
        res.sendStatus(500);
    }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;