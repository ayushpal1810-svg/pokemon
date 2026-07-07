const express = require("express");
const app = express();
const port = 3000;

const pokemonroutes = require("./routes/pokemonroutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Pokemon");
});

app.use("/pokemon", pokemonroutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});