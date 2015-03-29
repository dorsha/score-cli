#!/usr/bin/env node
'use strict';

console.log("Getting CloudSlang... it might take a while...");

var fs = require("fs");
var request = require("request");
var AdmZip = require('adm-zip');
var wrench = require("wrench");

var cslangCliUrl = 'https://github.com/CloudSlang/cloud-slang/releases/download/score-language-0.7.0/slang-cli.zip';
var cslangZip = 'cslang-cli.zip';
var cslangFolder = 'cslang';

var r = request(cslangCliUrl).pipe(fs.createWriteStream(cslangZip));

r.on('finish', function () {
    var zip = new AdmZip(cslangZip);
    zip.extractAllTo(cslangFolder, true);
	wrench.chmodSyncRecursive(cslangFolder, '0755');
	console.log("Finished");
});