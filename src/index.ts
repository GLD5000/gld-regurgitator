#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";

//Get working directory
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);
const workingDir = __dirname;
console.log("workingDir", workingDir);

// Get installer root
console.log('installer root',path.dirname(import.meta.filename));