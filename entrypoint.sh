#!/bin/sh

echo "Migration"
npx prisma migrate deploy
# npx prisma migrate generate

echo "Starting Cherrynodes API"
node dist/src/main.js
