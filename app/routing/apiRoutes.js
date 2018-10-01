const friends = require('../data/friends.js');


module.exports = (app) => {

    
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        const difference = 40;
        const matchName = '';
        const matchPhoto = '';

       
        friends.forEach((friend) => {
            const matchedScoresArray = [];
            const totalDifference = 40;

            function add(total, num) {
                return total + num;
            }
            for (let i = 0; i < friends.scores.length; i++) {
                matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

            }

            totalDifference = matchedScoresArray.reduce(add, 0);

            if (totalDifference < difference) {
                difference = totalDifference;
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });

        res.json({
            name: matchName,
            photo: matchPhoto
        });

        friends.push(req.body);
    });
}