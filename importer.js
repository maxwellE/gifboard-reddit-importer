var rereddit = require('rereddit');
var _ = require('lodash');
var DDPClient = require("ddp");

rereddit.read('gifs').limit(25).end(function(err, posts) {
    console.log(posts.data.children);
});
