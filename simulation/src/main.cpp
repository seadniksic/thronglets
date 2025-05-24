#include <emscripten.h>
#include <cstdint>
#include <vector>
#include <iostream>
#include "sim.h"

// place these values in a config file at some point

static uint32_t tick_rate = 30;


static std::unique_ptr<Sim> simulation = std::make_unique<Sim>(tick_rate);


extern "C" {

/** High Level Simulation Controls */

EMSCRIPTEN_KEEPALIVE
void start_simulation() {
    simulation->start();
}

EMSCRIPTEN_KEEPALIVE
void stop_simulation() {
    simulation->stop();
}

EMSCRIPTEN_KEEPALIVE
void end_simulation() {
    simulation->end();
}

EMSCRIPTEN_KEEPALIVE
void restart_simulation() {
    simulation->restart();
}

EMSCRIPTEN_KEEPALIVE
int get_tick_count() {
    return simulation->get_ticks();
}

//EMSCRIPTEN_KEEPALIVE
//int get_tick_count() {
    //simulation.get_voxel_buffer();
//}

}

int main() {

    std::cout << "main thread started\n"<< std::flush;
    return 0;
}


