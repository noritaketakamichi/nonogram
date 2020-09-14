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

app.get("/api", async(req, res) => {
    //return filtered locations
    try {
        const state = req.query.state;
        const city = req.query.city;
        const highway = req.query.highway;
        console.log(state, city, highway);
        const locations = await db
            .select()
            .where({
                state: state,
                city: city,
                highway: highway,
            })
            .from("locations");
        console.log(`location:${locations}`);
        res.json(locations);
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