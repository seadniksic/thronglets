#pragma once

#include "world.h"
#include <cstdint>
#include <memory>
#include <glm/glm.hpp>

namespace thronglets {

class Sim {

    public:
        Sim(uint32_t tick_rate);
        void start();
        void stop();
        void end();
        void restart();
        uint32_t get_ticks();
        static void* thread_entry(void* args);
        void main_loop();
        uint32_t get_voxel_buffer();
        void update_view_port(double x, double y, double z);
        
    private:
        std::unique_ptr<World> world_;
        bool running_ = false;
        uint32_t tick_count_ = 0;
        uint32_t tick_rate_; 
        glm::vec3 view_port_ = glm::vec3(0,0,0);
};

}
