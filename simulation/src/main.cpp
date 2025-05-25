#include <emscripten.h>
#include <cstdint>
#include <memory>
#include <vector>
#include <iostream>
#include "sim.h"

// place these values in a config file at some point

static uint32_t tick_rate = 30;


extern "C" {

/** High Level Simulation Controls */

std::unique_ptr<thronglets::Sim> simulation = std::make_unique<thronglets::Sim>(tick_rate);

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

EMSCRIPTEN_KEEPALIVE
uint32_t get_voxel_buffer() {
    return simulation->get_voxel_buffer();
}

EMSCRIPTEN_KEEPALIVE
void update_view_port(int64_t x, int64_t y, int64_t z) {
    simulation->update_view_port(x, y, z);
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


