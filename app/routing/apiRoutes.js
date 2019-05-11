var friends = require("../data/friends");

function apiRoutes(app) {
    // API GET request and return as JSON data
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //When the form is submitted, the data is sent to the server
    app.post("/api/friends", function (req, res) {
        console.log(req.body);

        var newUser = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };

        //We need to parseInt the scores because incoming data is string
        var parsedScores = [];
        for (var i = 0; i < newUser.scores.length; i++) {
            parsedScores.push(parseInt(req.body.scores[i]));
        }
        newUser.scores = parsedScores;

        //This variable stores the difference between the user and friends in database
        var totalDifference = 0;
        //This array stores the total difference scores between the new user and database friends
        var differenceArr = [];

        //Loop through friends array in our database.
        for (var i = 0; i < friends.length; i++) {
            //Loop through the scores of each friend in database
            for (var j = 0; j < newUser.scores.length; j++) {

                //Calculate total difference between the user and friends stored in the database
                totalDifference += Math.abs(newUser.scores[j] - parseInt(friends[i].scores[j]));
            }
            differenceArr.push(totalDifference);
        }

        var bestMatchIndex = 0;
        //Determining the best match by looping through differenceArr
        for (var k = 0; k < differenceArr.length; k++) {
            //Search for the lowest difference in each iteration and reassign bestMatch variable if equal or lower
            if (differenceArr[k] <= differenceArr[bestMatchIndex]) {
                bestMatchIndex = k;
            }
        }

        var bestMatch = friends[bestMatchIndex];

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);

        // Push the user's data to the database
        friends.push(newUser);
    });
};

//Export for server.js file
module.exports = apiRoutes;