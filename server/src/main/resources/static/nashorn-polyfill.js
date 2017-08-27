var global = this;
var window = this;
window.location = {
    hostname: "localhost"
};
var navigator = this;

var process = {env:{}};
var console = {
    error: print,
    debug: print,
    warn: print,
    log: print
};
window.setTimeout = function() {};
window.Promise = {
    resolve: function () {},
    reject: function() {}
};