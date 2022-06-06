// Look at NPM JS
// Look at sequelize.com docs

const Movie = require("./table");

// Add Movie
exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(`Succesfully added ${response.dataValues.title} to the db`);
    } catch (error) {
        console.log(error)
    }
}

// List Movie
exports.listMovie = async () => {
    try {
        const response = await Movie.findAll();
        for (let i =0; i < response.length; i++){
            console.log(response[i].dataValues.title)
        }
    } catch (error) {
        console.log(error);
    }
}

exports.updateMovie = async (updateObj, filterObj) => {
    try {
      //find a movie and update a column
      const response = await Movie.update(updateObj, { where: filterObj });
      if (response[0] > 0) {
        console.log("Successfully updated");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

// Delete Movie
exports.delMovie = async (filterObj) => {
    try {
        const response = await Movie.destroy({
            where: {
                title: filterObj.title
            }
        });
        if (response > 0){
            console.log("Successfully deleted")
        } else {
            console.log("Something went wrong");
        }
    } catch (error) {
        console.log(error);
    }
}