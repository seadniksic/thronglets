#include "world.h"
#include <memory>
#include <string.h>
#include <assert.h>
#include <iostream>


namespace thronglets {

    World::World() : mainChunk(std::make_shared<Chunk>) {}

    uint32_t World::get_voxel_buffer() {
        //mainChunk = std::make_shared<Chunk>(); 
        auto offset = reinterpret_cast<uint32_t>(mainChunk);
        size_t wasmSize = __builtin_wasm_memory_size(0) * 65536;
        std::cout << offset<< std::endl;
        //printf("Pointer: %lu\nWASM memory size: %zu\n", offset, wasmSize);
        assert(offset < wasmSize);
        return offset;
    }

    void World::create_world() {
        //std::cout << "creating world" << std::endl;
        
        mainChunk = new Chunk();
        std::cout << sizeof(Chunk) << std::endl;
        std::cout << mainChunk << std::endl;
    }
    
}
