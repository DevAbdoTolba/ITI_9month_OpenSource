/**
 * COMPREHENSIVE DATA STRUCTURES & ALGORITHMS IMPLEMENTATION
 * * Included Features:
 * 1. Binary Tree / BST (BFS, Insertion, Deletion, Array Conversions)
 * 2. Graph Adjacency Matrix
 * 3. Graph Adjacency List
 * 4. Mini Presentation: Dijkstra's Shortest Path Algorithm
 */

#include <iostream>
#include <vector>
#include <queue>
#include <list>
#include <climits>
#include <iomanip>

using namespace std;

// ==========================================
// PART 1: BINARY SEARCH TREE & BFS
// ==========================================

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class BinarySearchTree {
public:
    TreeNode* root;

    BinarySearchTree() { root = NULL; }

    // 1. Insertion
    TreeNode* insert(TreeNode* node, int key) {
        if (node == NULL) return new TreeNode(key);
        if (key < node->val)
            node->left = insert(node->left, key);
        else if (key > node->val)
            node->right = insert(node->right, key);
        return node;
    }

    void add(int key) {
        root = insert(root, key);
    }

    // 2. Deletion
    TreeNode* minValueNode(TreeNode* node) {
        TreeNode* current = node;
        while (current && current->left != NULL)
            current = current->left;
        return current;
    }

    TreeNode* deleteNode(TreeNode* node, int key) {
        if (node == NULL) return node;

        if (key < node->val)
            node->left = deleteNode(node->left, key);
        else if (key > node->val)
            node->right = deleteNode(node->right, key);
        else {
            // Node with one child or no child
            if (node->left == NULL) {
                TreeNode* temp = node->right;
                delete node;
                return temp;
            } else if (node->right == NULL) {
                TreeNode* temp = node->left;
                delete node;
                return temp;
            }
            // Node with two children: Get inorder successor
            TreeNode* temp = minValueNode(node->right);
            node->val = temp->val;
            node->right = deleteNode(node->right, temp->val);
        }
        return node;
    }

    void remove(int key) {
        root = deleteNode(root, key);
        cout << "Node " << key << " deleted (if it existed).\n";
    }

    // 3. BFS Traversal (Level Order)
    void BFS() {
        if (root == NULL) {
            cout << "Tree is empty.\n";
            return;
        }

        cout << "BFS (Level Order) Traversal: ";
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            TreeNode* temp = q.front();
            q.pop();
            cout << temp->val << " ";

            if (temp->left != NULL) q.push(temp->left);
            if (temp->right != NULL) q.push(temp->right);
        }
        cout << endl;
    }

    // 4. Sorted Array to Balanced BST (SortedArrayToBFS logic)
    TreeNode* sortedArrayToBSTHelper(const vector<int>& arr, int start, int end) {
        if (start > end) return NULL;
        int mid = start + (end - start) / 2;
        TreeNode* node = new TreeNode(arr[mid]);
        node->left = sortedArrayToBSTHelper(arr, start, mid - 1);
        node->right = sortedArrayToBSTHelper(arr, mid + 1, end);
        return node;
    }

    void buildFromSortedArray(const vector<int>& arr) {
        root = sortedArrayToBSTHelper(arr, 0, arr.size() - 1);
        cout << "Balanced BST built from sorted array.\n";
    }

    // 5. Array To Tree (Level Order Insertion / ArrayToBFS logic)
    // Constructs a Complete Binary Tree where children of i are 2i+1 and 2i+2
    TreeNode* arrayToTreeHelper(const vector<int>& arr, int i) {
        TreeNode* root = NULL;
        if (i < arr.size()) {
            root = new TreeNode(arr[i]);
            root->left = arrayToTreeHelper(arr, 2 * i + 1);
            root->right = arrayToTreeHelper(arr, 2 * i + 2);
        }
        return root;
    }

    void buildFromLevelOrderArray(const vector<int>& arr) {
        root = arrayToTreeHelper(arr, 0);
        cout << "Tree built from array (Level Order Construction).\n";
    }
};

// ==========================================
// PART 2: GRAPH ADJACENCY MATRIX
// ==========================================

class GraphMatrix {
    int V;
    vector<vector<int>> adjMatrix;

public:
    GraphMatrix(int V) {
        this->V = V;
        adjMatrix.resize(V, vector<int>(V, 0));
    }

    void addEdge(int u, int v, bool directed = false) {
        if (u >= 0 && u < V && v >= 0 && v < V) {
            adjMatrix[u][v] = 1;
            if (!directed) {
                adjMatrix[v][u] = 1;
            }
        }
    }

    void display() {
        cout << "\n--- Adjacency Matrix (" << V << "x" << V << ") ---\n";
        cout << "   ";
        for (int i = 0; i < V; i++) cout << i << " ";
        cout << "\n";
        
        for (int i = 0; i < V; i++) {
            cout << i << ": ";
            for (int j = 0; j < V; j++) {
                cout << adjMatrix[i][j] << " ";
            }
            cout << "\n";
        }
    }
};

// ==========================================
// PART 3: GRAPH ADJACENCY LIST
// ==========================================

class GraphList {
    int V;
    vector<list<int>> adjList;

public:
    GraphList(int V) {
        this->V = V;
        adjList.resize(V);
    }

    void addEdge(int u, int v, bool directed = false) {
        if (u >= 0 && u < V && v >= 0 && v < V) {
            adjList[u].push_back(v);
            if (!directed) {
                adjList[v].push_back(u);
            }
        }
    }

    void display() {
        cout << "\n--- Adjacency List ---\n";
        for (int i = 0; i < V; i++) {
            cout << "Vertex " << i << ":";
            for (int neighbor : adjList[i]) {
                cout << " -> " << neighbor;
            }
            cout << " -> NULL\n";
        }
    }
};

// ==========================================
// PART 4: MINI PRESENTATION (DIJKSTRA)
// ==========================================

namespace DijkstraPresentation {

    void printSolution(const vector<int>& dist, int V, int src) {
        cout << "\n-------------------------------------------------\n";
        cout << "RESULT: Shortest Paths from Source Vertex " << src << "\n";
        cout << "-------------------------------------------------\n";
        cout << "Vertex \t\t Distance from Source\n";
        for (int i = 0; i < V; i++) {
            cout << i << " \t\t ";
            if (dist[i] == INT_MAX) cout << "INF";
            else cout << dist[i];
            cout << "\n";
        }
    }

    // Dijkstra's Algorithm using Adjacency List and Min-Priority Queue
    void runAlgorithm() {
        cout << "\n=============================================\n";
        cout << "   MINI PRESENTATION: DIJKSTRA'S ALGORITHM   \n";
        cout << "=============================================\n";
        
        cout << "CONCEPT:\n";
        cout << "Dijkstra's algorithm finds the shortest path from a single source\n";
        cout << "node to all other nodes in a graph with non-negative edge weights.\n";
        cout << "It uses a Greedy approach with a Priority Queue.\n\n";

        // Hardcoded Weighted Graph Example
        int V = 5;
        // Vector of pairs: <Vertex, Weight>
        vector<vector<pair<int, int>>> adj(V);

        // Constructing a sample graph
        // 0 --2--> 1
        // 0 --6--> 3
        // 1 --3--> 2
        // 1 --8--> 3
        // 1 --5--> 4
        // 2 --7--> 4
        // 3 --9--> 4
        
        auto addEdge = [&](int u, int v, int w) {
            adj[u].push_back({v, w});
            adj[v].push_back({u, w}); // Undirected for this example
        };

        addEdge(0, 1, 2);
        addEdge(0, 3, 6);
        addEdge(1, 2, 3);
        addEdge(1, 3, 8);
        addEdge(1, 4, 5);
        addEdge(2, 4, 7);
        addEdge(3, 4, 9);

        cout << "Graph Structure (Vertices: " << V << "):\n";
        cout << "0 --(2)-- 1 --(3)-- 2\n";
        cout << "|         |         |\n";
        cout << "(6)       (5)       (7)\n";
        cout << "|         |         |\n";
        cout << "3 --(9)-- 4 -------+\n";
        
        int src = 0;
        cout << "\nRunning Dijkstra from Source: " << src << "...\n";

        // Min-heap priority queue: stores <distance, vertex>
        priority_queue< pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>> > pq;
        
        // Distance vector initialized to INF
        vector<int> dist(V, INT_MAX);

        pq.push({0, src});
        dist[src] = 0;

        while (!pq.empty()) {
            int u = pq.top().second;
            pq.pop();

            // Iterate through all adjacent vertices of u
            for (auto it : adj[u]) {
                int v = it.first;
                int weight = it.second;

                // Relaxation Step
                if (dist[v] > dist[u] + weight) {
                    dist[v] = dist[u] + weight;
                    pq.push({dist[v], v});
                }
            }
        }

        printSolution(dist, V, src);
        cout << "\nCOMPLEXITY: O(E * log V) using Priority Queue.\n";
    }
}

// ==========================================
// MAIN MENU
// ==========================================

int main() {
    while (true) {
        cout << "\n############################################\n";
        cout << "      C++ DATA STRUCTURES & ALGORITHMS      \n";
        cout << "############################################\n";
        cout << "1. BFS Full Impl (Tree: Insert, Delete, ArrayToBFS, SortedArrayToBFS)\n";
        cout << "2. Graph Adjacency Matrix\n";
        cout << "3. Graph Adjacency List\n";
        cout << "4. Mini Presentation: Dijkstra's Algorithm\n";
        cout << "0. Exit\n";
        cout << "Select option: ";
        
        int choice;
        cin >> choice;

        if (choice == 0) break;

        switch (choice) {
            case 1: {
                BinarySearchTree bst;
                int subChoice;
                cout << "\n-- Tree Operations --\n";
                cout << "1. Create Manual BST & BFS\n";
                cout << "2. Array To BFS (Level Order Construction)\n";
                cout << "3. Sorted Array To BFS (Balanced BST)\n";
                cout << "Choice: ";
                cin >> subChoice;

                if (subChoice == 1) {
                    cout << "Inserting 50, 30, 20, 40, 70, 60, 80...\n";
                    bst.add(50); bst.add(30); bst.add(20); 
                    bst.add(40); bst.add(70); bst.add(60); bst.add(80);
                    bst.BFS();
                    cout << "Deleting 20...\n";
                    bst.remove(20);
                    bst.BFS();
                } 
                else if (subChoice == 2) {
                    vector<int> arr = {1, 2, 3, 4, 5, 6, 7};
                    cout << "Input Array: {1, 2, 3, 4, 5, 6, 7}\n";
                    bst.buildFromLevelOrderArray(arr);
                    bst.BFS();
                }
                else if (subChoice == 3) {
                    vector<int> arr = {10, 20, 30, 40, 50, 60, 70};
                    cout << "Sorted Input: {10, 20, 30, 40, 50, 60, 70}\n";
                    bst.buildFromSortedArray(arr);
                    bst.BFS(); // Should show level order of the balanced tree
                }
                break;
            }
            case 2: {
                GraphMatrix g(5);
                g.addEdge(0, 1);
                g.addEdge(0, 4);
                g.addEdge(1, 2);
                g.addEdge(1, 3);
                g.addEdge(1, 4);
                g.addEdge(2, 3);
                g.addEdge(3, 4);
                cout << "Added edges for a 5-node graph.\n";
                g.display();
                break;
            }
            case 3: {
                GraphList g(5);
                g.addEdge(0, 1);
                g.addEdge(0, 4);
                g.addEdge(1, 2);
                g.addEdge(1, 3);
                g.addEdge(1, 4);
                g.addEdge(2, 3);
                g.addEdge(3, 4);
                cout << "Added edges for a 5-node graph.\n";
                g.display();
                break;
            }
            case 4: {
                DijkstraPresentation::runAlgorithm();
                break;
            }
            default:
                cout << "Invalid option.\n";
        }
        cout << "\nPress Enter to continue...";
        cin.ignore();
        cin.get();
    }
    return 0;
}