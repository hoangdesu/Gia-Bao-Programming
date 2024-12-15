#!/bin/bash

echo "starting server..."

# 1. activate the virtual env
source .venv/bin/activate

# 2. start the fastapi server
fastapi dev server.py