//require path for location, and friends for the data
const path = require ('path');
const friends = require ('../data/friends');

//the function to export
var api = function (app) {

    //establishing the route of information
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    //POsting through express to the Friends.js only avail on server, not persitant 
    app.post('/api/friends', function (req, res){
        var newFriend = req.body;
        var similarities;
        var similaritiesArr = [];

        friends.forEach (friend => {
            let similarityScore = 0;

            for ( var i = 0; i < friend.scores.length; i++) {
                similarityScore += Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
            };

            similaritiesArr.push({
                name: friend.name,
                score : similarityScore,
                photo: friend.photo
            });
        })

        //Searching for the best match by the lowest differances
        let matchedFriend = similaritiesArr.reduce( (carry, next) => {
            if( carry.score < next.score )
                return carry;
            else
                return next;
        })
    

        friends.push(newFriend)
        res.send(matchedFriend)
        
    })

}

module.exports = api;