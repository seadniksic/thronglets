#include "world.h"
#include <cstdint>
#include <memory>

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
        void get_voxel_buffer();
        
    private:
        std::unique_ptr<World> world;
        bool running_ = false;
        uint32_t tick_count_ = 0;
        uint32_t tick_rate_; 
};

}
