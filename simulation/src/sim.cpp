#include "sim.h"
#include <chrono>
#include <thread>
#include <iostream>

void Sim::start() {
    running = true;
    while (running) {
        std::this_thread::sleep_for(std::chrono::milliseconds(1000));
        tick_count++;
    }
}

void Sim::stop() {
    running = false;
}

void Sim::end() {
    std::cout << "Ending simulation";
}

void Sim::restart() {
    tick_count = 0;
}

uint32_t Sim::get_ticks() {
    return tick_count;

}
