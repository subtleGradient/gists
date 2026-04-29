#!/usr/bin/env bun

const [doc = "", ...args] = process.argv.slice(2);

console.log("shebanger works");
console.log(`doc=${doc}`);
console.log(`args=${JSON.stringify(args)}`);
