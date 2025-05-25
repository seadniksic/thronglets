#include "world.h"
#include <memory>
#include <string.h>
#include <assert.h>
#include <iostream>


namespace thronglets {

    World::World() : mainChunk(std::make_shared<Chunk>()) {}

    uint32_t World::get_voxel_buffer() {
        return reinterpret_cast<uint32_t>(mainChunk.get());
    }
}
