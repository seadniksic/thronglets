cmake_minimum_required(VERSION 3.16)

   # Set project name and C++ standard
project(Thronglets)

# Set the target output directory
set(CMAKE_BINARY_DIR ${CMAKE_SOURCE_DIR}/build)

# Set the output directory for wasm files
#set(CMAKE_WASM_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/public)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})

# Define C++ standard
set(CMAKE_CXX_STANDARD 17)

# Add your C++ source files here
add_executable(sim simulation/src/main.cpp simulation/src/sim.cpp simulation/src/world.cpp) 

# Tell Emscripten to output ES6 module (`.mjs`)
set_target_properties(sim PROPERTIES
    OUTPUT_NAME "sim"
    SUFFIX ".mjs"
)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -mbulk-memory -matomics")
# Emscripten-specific flags
set(CMAKE_EXECUTABLE_SUFFIX ".mjs")

set_target_properties(sim PROPERTIES
  LINK_FLAGS "-sEXPORTED_FUNCTIONS=['_main','_malloc','_free'] \
              -sEXPORTED_RUNTIME_METHODS=['ccall','cwrap'] \
              -sUSE_PTHREADS=1 \
              -sPTHREAD_POOL_SIZE=4 \
              -sALLOW_MEMORY_GROWTH=1 \
              -sMODULARIZE=1 \
              -sEXPORT_NAME=createModule \
              -sENVIRONMENT=web,worker \
              -sIMPORTED_MEMORY=1 \
              -sSHARED_MEMORY=1 \
              -sINITIAL_MEMORY=33554432 \
              -sMAXIMUM_MEMORY=67108864 \
              -sMALLOC=mimalloc \
              -sASYNCIFY"
)

# Link any necessary libraries here, e.g., SDL, SFML, etc.
# target_link_libraries(sim PRIVATE SDL2)

add_custom_command(TARGET sim POST_BUILD
  COMMAND ${CMAKE_COMMAND} -E make_directory ${CMAKE_SOURCE_DIR}/client/public
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    ${CMAKE_BINARY_DIR}/sim.mjs
    ${CMAKE_SOURCE_DIR}/client/public/sim.mjs
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    ${CMAKE_BINARY_DIR}/sim.wasm
    ${CMAKE_SOURCE_DIR}/client/public/sim.wasm
)




