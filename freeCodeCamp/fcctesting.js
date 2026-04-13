'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function (app) {
  app.route('/_api/server.js')
    .get(function (req, res, next) {
      console.log('requested');
      fs.readFile(path.join(__dirname, '../server.js'), function (err, data) {
        if (err) return next(err);
        res.type('txt').send(data.toString());
      });
    });
};