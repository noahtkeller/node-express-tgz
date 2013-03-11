/*!
 * express-tgz
 * Copyright 2013 Noah Keller <noahtkeller@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var
        async = require('async'),
        http = require('http'),
        express = require('express'),
        zlib = require('zlib'),
        tar = require('tar'),
        fstream = require('fstream'),
        res = express.response || http.ServerResponse.prototype;

/**
 * Options for the tar.gz
 */

exports.options = {
    level: 1,
    memLevel: 1
};

res.tgz = function(folder, filename, cb) {
    if (typeof filename === 'function') {
        cb = filename;
        filename = undefined;
    }

    if (typeof filename === 'undefined') {
        filename = "attachment.tar.gz";
    }

    cb = cb || function() {
    };
    this.header('Content-Type', 'application/x-gzip');
    this.header('Content-Disposition', 'attachment; filename="' + filename + '"');

    fstream.Reader({
        type: "Directory",
        path: folder
    })
            .pipe(tar.Pack())
            .pipe(zlib.createGzip())
            .pipe(this);
};