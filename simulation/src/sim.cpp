#include "sim.h"
#include <chrono>
#include <thread>
#include <iostream>



Sim::Sim(uint32_t tick_rate) : tick_rate_(tick_rate) {}


void Sim::start() {
    std::cout << "starting simulation";
    running = true;
    pthread_t thread;
    pthread_create(&thread, nullptr, main_loop, nullptr);
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

void * Sim::main_loop(void* arg) {
    while (running) {
        emscripten_sleep(tick_hz);
        tick_count++;
    } 
}



uint32_t Sim::get_ticks() {
    return tick_count;

}
