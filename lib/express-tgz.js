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

res.tgz = function(folder, filename, include_root, cb) {
    if (include_root !== false) {
        include_root = true;
    }
    var reader = fstream.Reader({type: "Directory", path: folder}),
    pack = tar.Pack(), gzip = zlib.createGzip(), oldEmit = reader.emit;

    if (typeof filename === 'undefined') {
        filename = "attachment.tar.gz";
    }

    cb = cb || function() {
    };
    this.header('Content-Type', 'application/x-gzip');
    this.header('Content-Disposition', 'attachment; filename="' + filename + '"');

    if (!include_root) {
        reader.emit = function(ev, entry) {
            if (ev === "entry")
                entry.root = null;
            return oldEmit.apply(reader, arguments);
        };
    }

    reader.pipe(pack).pipe(gzip).pipe(this);
};