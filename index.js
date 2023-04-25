
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const pokemons = [
    {
      name: "bulbasaur",
      phone: "4999999-2227",
    },
    {
      name: "ivysaur",
      phone: "12312321312",
    },
    {
      name: "venusaur",
      phone: "432413421",
    },
    {
      name: "charmander",
      phone: "54353542",
    },
    {
      name: "charmeleon",
      phone: "543543534",
    },
    {
      name: "charizard",
      phone: "654654345234",
    },
    {
      name: "squirtle",
      phone: "543523423",
    },
    {
      name: "wartortle",
      phone: "54352432234",
    },
    {
      name: "blastoise",
      phone: "54325324234",
    },
    {
      name: "caterpie",
      phone: "542542342",
    },
    {
      name: "metapod",
      phone: "532432424",
    },
    {
      name: "butterfree",
      phone: "5643523432",
    },
    {
      name: "weedle",
      phone: "54364524342",
    },
    {
      name: "kakuna",
      phone: "5423523423",
    },
    {
      name: "beedrill",
      phone: "54243243245",
    },
    {
      name: "pidgey",
      phone: "54243242543",
    },
    {
      name: "pidgeotto",
      phone: "523423425322",
    },
    {
      name: "pidgeot",
      phone: "532432412312",
    },
    {
      name: "rattata",
      phone: "23243423423",
    },
    {
      name: "raticate",
      phone: "08967885",
    },
  ];

var express = require("express")
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get("/pokemons", function (req, res) {
    let fields = req.query.fields;
    let filteredPokemons = [];

    if (fields) {
      fields = fields.split(",");
      filteredPokemons = pokemons.map((pokemon) =>
        fields.reduce((obj, field) => {
          if (pokemon.hasOwnProperty(field)) {
            obj[field] = pokemon[field];
          }
          return obj;
        }, {})
      );
    } else {
      filteredPokemons = pokemons;
    }
    res.send(filteredPokemons);
  });
  

app.listen(4000, () => {
  console.log(`API is online on port: ${4000}`);
});
