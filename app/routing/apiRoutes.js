

var friends = require('../data/friends.js');




module.exports = function (app) {



    app.get('/api/friends', function (req, res) {

        // display of all possible matches
        res.json(friends);


    });

    // logic compatibility handling


    app.post('/api/friends', function (req, res) {


        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;

        console.log(userData);
        var userScores = userData.scores;

        console.log(req.body);

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;


            // we loop through the scores of every friend
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // math abs turn any negative value to positive, and in positive in stays the
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));


                if (totalDifference <= bestMatch.friendDifference) {

                    //reset the best match to be the new friend

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }

            }
           
        }

       
        friends.push(userData);

        // return json with the user's best match . This will be used by the HTML in the next page

        res.json(bestMatch);



    });
}

