let MySportsFeeds = require("mysportsfeeds-node");

let msf = new MySportsFeeds("1.2", true, null);
msf.authenticate("jbreaker1", "12qwer");

let today = new Date();

exports.getData = function() {

        return msf.getData('nhl', '2017-2018-regular', 'scoreboard', 'json', {
        fordate: today.getFullYear() +
            ('0' + parseInt(today.getMonth() + 1)).slice(-2) +
            ('0' + today.getDate()).slice(-2),
        force: true
        });

};
