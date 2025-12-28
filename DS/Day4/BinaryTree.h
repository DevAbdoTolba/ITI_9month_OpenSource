
struct BinaryNode {
    int data;
    BinaryNode* left;
    BinaryNode* right;
    BinaryNode(int val);
};

BinaryNode* buildFromArray(int arr[], int n, int i);
BinaryNode* buildSpecificBST();

// Implementation
BinaryNode::BinaryNode(int val) : data(val), left(nullptr), right(nullptr) {}

BinaryNode* buildFromArray(int arr[], int n, int i) {
    if (i > n) return nullptr;
    BinaryNode* root = new BinaryNode(arr[i]); 
    root->left = buildFromArray(arr, n, 2 * i);
    root->right = buildFromArray(arr, n, 2 * i + 1);
    return root;
}

BinaryNode* buildSpecificBST() {
    BinaryNode* root = new BinaryNode(50);
    root->left = new BinaryNode(17);
    root->right = new BinaryNode(72);
    root->left->left = new BinaryNode(12);
    root->left->right = new BinaryNode(23);
    root->right->left = new BinaryNode(54);
    root->right->right = new BinaryNode(76);
    root->left->left->left = new BinaryNode(9);
    root->left->left->right = new BinaryNode(14);
    root->left->right->left = new BinaryNode(19);
    root->right->left->right = new BinaryNode(67);
    return root;
}
