//#include "world.h"
#include <cstdint>


class Sim {

    public:
        Sim(uint32_t tick_rate);
        void start();
        void stop();
        void end();
        void restart();
        uint32_t get_ticks();
        
    private:
        //World* world;
        bool running = false;
        uint32_t tick_count = 0;
        uint32_t tick_rate_; 

};
