/*
    The simplest test to check that we can assign objects to JS variables in
    FreeMarker templates. using freemarker.js

    What we want to do is:
    - Provide an object in JS
    - Use that as data to render a FreeMarker template
    - In the template assign the obejct to a JS variable so we can
        work with the data on the website.
 */


//Require a few things.
var Freemarker = require('freemarker.js');
var path = require('path');
var fs = require('fs');

//Set up freemarker.js
var fm = new Freemarker({
    viewRoot: path.join(__dirname, 'template')
});

//The template to render and some basic data.
let tpl = 'template.ftl';
let data = {
    types: [
        {
            type: "one",
            number: 1
        },
        {
            type: '二',
            number: 2
        }
    ]
}

//Render the page.
fm.render(tpl, data, function(err, html, output) {
    console.log(err);
    console.log('--------------------------------------------------');
    console.log(html);
    var indexPath = path.join(__dirname, 'test.html');
    fs.writeFile(indexPath, html, function() {

    });
    console.log('--------------------------------------------------');
    console.log(output);
});
