#!/usr/bin/env bun

const args = process.argv.slice(2);
const runtime = globalThis.Bun ? `bun ${Bun.version}` : `node ${process.version}`;

console.log("subtleGradient/gists bunx GitHub branch probe works");
console.log(`runtime=${runtime}`);
console.log(`argv=${JSON.stringify(args)}`);
console.log(`cwd=${process.cwd()}`);
