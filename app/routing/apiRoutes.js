var friends = require("../data/friends");

module.exports = function (app) {
    // API GET request and return as JSON data
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //When the form is submitted, the data is sent to the server
    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        //variable that stores the user's name, photo, and scores
        var userData = req.body;
        //variable that stores the user's scores
        var userScores = user.scores;

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        //This variable stores the difference between the user and friends in database
        var totalDifference = 0;

        //Loop through friends array in our database.
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;

            //Loop through the score of each user
            for (var j = 0; j < friends[i].scores[j]; j++) {

                //Calculate total difference between the user and those stored in the database
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // Push the user's data to the database
        friends.push(userData);

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);
    });
};