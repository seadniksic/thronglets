#include <emscripten.h>
#include <cstdint>
#include <vector>
#include <iostream>

extern "C" {

static bool isRunning = false;
static int tickCount = 0;

EMSCRIPTEN_KEEPALIVE
void start_simulation() {
    isRunning = true;
    tickCount = 0;
}

EMSCRIPTEN_KEEPALIVE
void stop_simulation() {
    isRunning = false;
    tickCount = 0;
}

EMSCRIPTEN_KEEPALIVE
void tick() {
    tickCount++;
}

EMSCRIPTEN_KEEPALIVE
int get_tick_count() {
    return tickCount;
}


}

int main() {
    return 0;
}


