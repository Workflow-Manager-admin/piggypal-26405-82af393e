#!/bin/bash
cd /home/kavia/workspace/code-generation/piggypal-26405-82af393e/piggy_pal
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

