const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//connextion a la base de données

connectDB();

const app = express(); // chaque fois que l'on va appeler app.quelquechose (get, etc) on va utiliser les methodes de express

//middleware qui permet de traiter les données de la request

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post-routes")); 
// va chercher la reference de la route post dans le repertoire 'routes' et le fichier 'post.routes.js'


// l appli nodemon sert a redemarrer le server a chaque modification automatiqueent
// ici on demande de lancer le serveur sur le port 5000 en localhost avec la production d'un message le signalant
app.listen(port, () => console.log('le serveur est démarré sur le port '+ port))
