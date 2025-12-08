
#include <vector>

struct Node {
    int data;
    std::vector<Node*> children;
    Node(int value);
};

int treeHeight(Node* root);
int countNodes(Node* root);

// Implementation
Node::Node(int value) : data(value) {}

int treeHeight(Node* root) {
    if (root == nullptr) return 0;
    if (root->children.empty()) return 1;

    int maxChildHeight = 0;
    for (size_t i = 0; i < root->children.size(); i++) {
        maxChildHeight = std::max(maxChildHeight, treeHeight(root->children[i]));
    }
    return 1 + maxChildHeight;
}

int countNodes(Node* root) {
    if (root == nullptr) return 0;
    int count = 1;
    for (size_t i = 0; i < root->children.size(); i++) {
        count += countNodes(root->children[i]);
    }
    return count;
}
