// this file contains the logic for authorizing administrators
// DO NOT RE-IMPLEMENT, poor security techniques, placeholder
const jwt = require("jsonwebtoken");

// global constants
const APP_SECRET  = "myappsecret";
const USERNAME  = "admin";
const PASSWORD  = "secret";

// contains mappings to filepaths used elsewhere in the app (i.e. urls)
const mappings = {
    get: ["/api/orders/", "/orders"],
    post: ["/api/products/", "/products", "/api/categories", "/categories"]
}

// based on GET or POST request, return whether the url begins with the 
// the specified paths in mappings
function requiresAuth(method, url) {
    return (mappings[method.toLowerCase()] || [])
    .find(p => url.startsWith(p)) !== undefined;
}

module.exports = function(req, res, next) {
    // if we are dealing with a post login request, authorize only if the username and password
    // of the request match the login
    if (req.url.endsWith("/login") && req.method == "POST") {
        if (req.body && req.body.name == USERNAME && req.body.password == PASSWORD) {
            // construct the access token
            let token = jwt.sign({ data: USERNAME, expiresIn: "1h"}, APP_SECRET);
            res.json({success: true, token: token});
        } else {
            res.json({success: false});
        }
        res.end();
        return;
    } 
    // if we are dealing with any other url that requires authorization, check the
    // http request header
    else if (requiresAuth(req.method, req.url)) {
        let token = req.headers["authorization"] || "";
        if (token.startsWith("Bearer<")) {
            token = token.substring(7, token.length-1);
            try {
                jwt.verify(token, APP_SECRET);
                next();
                return;
            } catch (err) {}
        }
        res.statusCode = 401;
        res.end();
        return;
    }
    next();
}