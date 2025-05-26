#pragma once

#include <memory>
#include <string>


namespace thronglets {

constexpr uint16_t CHUNK_SIZE_X = 16;
constexpr uint16_t CHUNK_SIZE_Y = 1;
constexpr uint16_t CHUNK_SIZE_Z = 16;

struct Voxel {
    uint8_t type;
};

struct VoxelType {
    std::string name;
    uint8_t color[3]; // rgb
    bool isSold;
};

struct Chunk {
    Voxel voxels[CHUNK_SIZE_X][CHUNK_SIZE_Y][CHUNK_SIZE_Z];
};

class World {

    public:
        World();
        uint32_t get_voxel_buffer();

    private:
        std::shared_ptr<Chunk> mainChunk;
};

}
