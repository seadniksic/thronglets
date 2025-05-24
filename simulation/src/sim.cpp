#include "sim.h"
#include <chrono>
#include <thread>
#include <iostream>
#include <emscripten.h>

namespace thronglets {


Sim::Sim(uint32_t tick_rate) : tick_rate_(tick_rate) {}


void Sim::start() {
    running_ = true;
    pthread_t thread;
    pthread_create(&thread, nullptr, thread_entry, this);
    pthread_detach(thread);
}

void Sim::stop() {
    running_ = false;
}

void Sim::end() {
}

void Sim::restart() {
    tick_count_ = 0;
}

void* Sim::thread_entry(void* args) {
    Sim* sim = static_cast<Sim*>(args);
    sim->main_loop();
    return nullptr;
}

void Sim::main_loop() {
    while (running_) {
        emscripten_sleep(tick_rate_);
        tick_count_++;
    } 
    return;
}

uint32_t Sim::get_ticks() {
    return tick_count_;
}

}
