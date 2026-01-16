#include <stdio.h>

#define MAX 30

// Structure to represent an edge
struct Edge {
    int u, v, w;
};

// Function prototypes
int findParent(int vertex);
void unionSets(int u, int v);

// Global variables
int parent[MAX];

// Function to find the parent (for disjoint set)
int findParent(int vertex) {
    if (parent[vertex] == vertex)
        return vertex;
    return parent[vertex] = findParent(parent[vertex]);
}

// Function to join two sets
void unionSets(int u, int v) {
    int pu = findParent(u);
    int pv = findParent(v);
    parent[pu] = pv;
}

int main() {
    int n = 7;  // Number of vertices
    int e = 9;  // Number of edges
    struct Edge edges[] = {
        {1, 2, 28},
        {1, 6, 10},
        {2, 3, 16},
        {2, 7, 14},
        {3, 4, 12},
        {4, 5, 22},
        {4, 7, 18},
        {5, 6, 25},
        {5, 7, 21}
    };

    // Initialize parent array
    for (int i = 1; i <= n; i++)
        parent[i] = i;

    // Sort edges by weight (Bubble Sort)
    for (int i = 0; i < e - 1; i++) {
        for (int j = 0; j < e - i - 1; j++) {
            if (edges[j].w > edges[j + 1].w) {
                struct Edge temp = edges[j];
                edges[j] = edges[j + 1];
                edges[j + 1] = temp;
            }
        }
    }

    printf("Edges in the Minimum Spanning Tree:\n");

    int totalCost = 0;
    int count = 0;

    for (int i = 0; i < e && count < n - 1; i++) {
        int u = edges[i].u;
        int v = edges[i].v;
        int w = edges[i].w;

        if (findParent(u) != findParent(v)) {
            printf("%d -- %d == %d\n", u, v, w);
            totalCost += w;
            count++;
            unionSets(u, v);
        }
    }

    printf("Total Minimum Cost = %d\n", totalCost);

    return 0;
}