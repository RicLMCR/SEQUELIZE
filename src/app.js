const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovie, delMovie, updMovie} = require("./movie/functions");

const app = async(yargsObj) =>{
    try {
        await sequelize.sync();//This bot is really important and ensures that the table exists
        if (yargsObj.add){
            //take movie key b=value pairs from yargsObj, send them to add function and return the movie
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});

        } else if (yargsObj.list){
            //list all movies from database
            await listMovie();

        } else if (yargsObj.update){
            //take filter k/vpairs from 
            await updMovie({actor: yargsObj.actor},{title: yargsObj.title} )

        } else if (yargsObj.delete) {
            await delMovie({
                title: yargsObj.title
            });
        } else {
            console.log("incorect command")
        }
    } catch (error){
        console.log(error)
    }
}

app(yargs.argv);


// COMMANDS
// add movie: node src/app.js --add --title "my title" --actor "my actor"
// delete movie: node src/app.js --delete --title ""
// list movies: node src/app.js --list
// update (actor): node src/app.js --update --title "" --actor ""

