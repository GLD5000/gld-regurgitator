#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var url_1 = require("url");
//Get working directory
var __filename = (0, url_1.fileURLToPath)(import.meta.url); // get the resolved path to the file
var __dirname = path_1.default.dirname(__filename);
var workingDir = __dirname;
console.log("workingDir", workingDir);
// Get installer root
console.log('installer root', path_1.default.dirname(import.meta.filename));
