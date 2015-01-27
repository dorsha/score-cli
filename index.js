#!/usr/bin/env node
'use strict';

console.log("Getting score... it might take a while...");

var fs = require("fs");
var request = require("request");
var AdmZip = require('adm-zip');

var scoreCliUrl = 'https://github.com/openscore/score-language/releases/download/slang-CLI-v0.2.1/score-lang-cli.zip';
var scoreZip = 'score-lang-cli.zip';
var scoreFolder = 'score';

var r = request(scoreCliUrl).pipe(fs.createWriteStream(scoreZip));

r.on('finish', function () {
    var zip = new AdmZip(scoreZip);
    zip.extractAllTo(scoreFolder, true);
	console.log("Finished");
});