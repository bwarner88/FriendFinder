var friends = require('../data/friends');


module.exports = function(app) {

    
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {

        var userMatch = {
            name: "",
            photo: "",
            difference: 40
        };

        var userData = req.body;
        var userScore = userData.scores;

        var totalDifference;

        for(var i = 0; i < friends.length; i++){
            var matchedFriend = friends[i];
            difference = 0;
            console.log(matchedFriend.name);

            for(var j = 0; j < matchedFriend.scores.length; j++) {
                var matchedFriendScore = matchedFriend.scores[j];
                var currentUserScore = userScore[j];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(matchedFriendScore));
            }

                if(TotalDifference <= userMatch.difference) {
                    userMatch.name = matchedFriend.name;
                    userMatch.photo = matchedFriend.photo;
                    userMatch.friendDifference = totalDifference
                }
            
        }

        friends.push(userData);
        res.json(userMatch)
    //     var difference = 40;
    //     var matchName = '';
    //     var matchPhoto = '';

       
    //     friends.forEach(function(friend) {
    //         var matchedScoresArray = [];
    //         var totalDifference = 40;

    //         function add(total, num) {
    //             return total + num;
    //         }
    //         for (var i = 0; i < friends.scores.length; i++) {
    //             matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

    //         }

    //         totalDifference = matchedScoresArray.reduce(add, 0);

    //         if (totalDifference < difference) {
    //             difference = totalDifference;
    //             matchName = friend.name;
    //             matchPhoto = friend.photo;
    //         }
    //     });

    //     res.json({
    //         name: matchName,
    //         photo: matchPhoto
    //     });

    //     friends.push(req.body);
    });
}