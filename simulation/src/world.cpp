#include "world.h"
#include <memory>
#include <string.h>
#include <assert.h>
#include <iostream>
#include <cmath>


namespace thronglets {

    World::World() {

        size_t chunk_loader_bounds = std::pow(2, CHUNK_DIST) + 1;

        // construct initial chunks
        for (size_t i = 0; i < chunk_loader_bounds; ++i) {
            for (size_t ii = 0; ii < chunk_loader_bounds; ++ii) {
                chunk_map<

            }
        }

    }

    uint32_t World::get_voxel_buffer() {
        return reinterpret_cast<uint32_t>(mainChunk.get());
    }

    void World::update_chunks() {
        

    }
}
