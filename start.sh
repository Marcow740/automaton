#!/bin/bash
# Start script for Conway's Automaton

# This script initializes and runs the Conway Automaton

# Change this to the directory where your automaton code is located
AUTOMATON_DIR=".">

# Navigate to the automaton directory
cd "$AUTOMATON_DIR" || exit

# Run the automaton (change 'automaton.py' to your main run script if needed)
python automaton.py
