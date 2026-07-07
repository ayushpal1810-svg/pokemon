const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:name", async (req, res) => {
    try {
        const name = req.params.name;

        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );
const pokemon = {
    id: response.data.id,
    name: response.data.name,
    height: response.data.height,
    weight: response.data.weight,
    image: response.data.sprites.front_default,
    types: response.data.types.map(item => item.type.name),
    abilities: response.data.abilities.map(item => item.ability.name),
};

res.json(pokemon);
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Pokemon not found",
        });
    }
});

module.exports = router;