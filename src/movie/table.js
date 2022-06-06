const { DataTypes  } = require("sequelize");// Pull datatypes methid from sequelize
const {sequelize} = require("../db/connection");//Pull sequelize connection

const Movie = sequelize.define("Movie", { // variable name must reflect the one in speech marks
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    }
})

module.exports = Movie;