#include <string.h>


constexpr CHUNK_SIZE_X = 16;
constexpr CHUNK_SIZE_Y = 256;
constexpr CHUNK_SIZE_Z = 16;

struct Voxel {
    uint8_t type;
}

struct VoxelType {
    std::string name;
    uint8_t color[3]; // rgb
    bool isSold;
}

struct Chunk {
    Voxel voxels[CHUNK_SIZE_X][CHUNK_SIZE_Y][CHUNK_SIZE_Z];
}


