//Sending the use to the AJAX page first
var path = require ('path');

var html = function (app) {

    //Using the single forward slash to set the homepage
    app.get("/", function (req, res) {
        res.sendFile(path.join (__dirname, "../public/home.html"));
    })

    //Sending the user to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile( path.join(__dirname, "../public/survey.html"))
    })

    //Setting the default destination to the homepage
    app.get( function (req, res) {
        res.sendFile(path.join (__dirname, "../public/home.html"));
    })

}

module.exports = html;
