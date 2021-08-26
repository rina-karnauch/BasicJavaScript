(function () {
    var sh = require('./SpeakHello.js');
    var sg = require('./SpeakGoodBye.js');

    var names = ["Jiji", "Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            sg(names[i]);
        } else {
            sh(names[i]);
        }
    }
})();