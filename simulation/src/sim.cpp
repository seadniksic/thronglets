#include "sim.h"
#include <chrono>
#include <memory>
#include <thread>
#include <iostream>
#include <emscripten.h>
#include "world.h"

namespace thronglets {


Sim::Sim(uint32_t tick_rate) : tick_rate_(tick_rate), world_(std::make_unique<World>()) {}


void Sim::main_loop() {
    world_->create_world();
    while (running_) {
        emscripten_sleep(tick_rate_);
        tick_count_++;

         //main simulation loop here
        //world_->update_chunks();   world should have the current viewport from js function calls
    } 
    return;
}

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

uint32_t Sim::get_ticks() {
    return tick_count_;
}

uint32_t Sim::get_voxel_buffer() {
    return world_->get_voxel_buffer();
}

void Sim::update_view_port(int64_t x, int64_t y, int64_t z) {

    return;

}

}
