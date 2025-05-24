#!/bin/bash

set -e

SRC_DIR="simulation/src"
BUILD_DIR="build"

# Find all .cpp and .h files and feed them to entr
(find "$SRC_DIR" -type f \( -name '*.cpp' -o -name '*.h' \) | \
    entr -c cmake --build "$BUILD_DIR")


