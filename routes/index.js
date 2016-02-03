var Tools = require("./resTools");

var Customs = require("./Customs");
var Login = require("./Login");
var Signup = require("./Signup");
var Menus = require("./Menus");
var ResourceDepot = require("./ResourceDepot");
var Upload = require("./Upload");

module.exports = function (app) {
    app.get("/", function (req, res, next) {
        if (req.session.user) {
            Tools.log('Route', 'get', '', '登录用户', 'welcome');
            Tools.pageJump(req, res, next, "index.html", "首页", "welcome");
        } else {
            Tools.log('Route', 'get', '', '未登录用户', 'login');
            Tools.pageJump(req, res, next, "index.html", "登录", "login");
        }
    });

    Customs(app);

    Login(app);

    Signup(app);

    Menus(app);

    ResourceDepot(app);

    Upload(app);
};
