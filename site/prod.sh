#!/bin/bash
rm -rf ../dist

# Transform the source code
deno run --allow-read --allow-write --allow-run ./prod.ts
