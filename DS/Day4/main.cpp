#include <iostream>
#include <vector>

using namespace std;

int countOccurrences(int arr[], int n, int target) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            count++;
        }
    }
    return count;
}

int findMin(int arr[], int n) {
    if (n <= 0) return -1;
    int minVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}

bool isSorted(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

int firstOccurrence(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    int result = -1;

    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            result = mid;
            high = mid - 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}

int lastOccurrence(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    int result = -1;

    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            result = mid;
            low = mid + 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}
















struct Node {
    int data;
    vector<Node*> children;
    Node(int value) : data(value) {}
};



















int treeHeight(Node* root) {
    if (root == nullptr) return 0;
    if (root->children.empty()) return 1;

    int maxChildHeight = 0;
    for (size_t i = 0; i < root->children.size(); i++) {
        maxChildHeight = max(maxChildHeight, treeHeight(root->children[i]));
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

struct BinaryNode {
    int data;
    BinaryNode* left;
    BinaryNode* right;
    BinaryNode(int val) : data(val), left(nullptr), right(nullptr) {}
};

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




int main() {
    int arr1[] = {5, 2, 9, 2, 8, 2, 1};
    int n1 = 7;
    cout << "Count 2: " << countOccurrences(arr1, n1, 2) << endl;
    cout << "Min: " << findMin(arr1, n1) << endl;
    cout << "Sorted?: " << isSorted(arr1, n1) << endl;

    int arr2[] = {1, 3, 5, 5, 5, 8, 10};
    int n2 = 7;
    cout << "Sorted?: " << isSorted(arr2, n2) << endl;
    cout << "First 5: " << firstOccurrence(arr2, n2, 5) << endl;
    cout << "Last 5: " << lastOccurrence(arr2, n2, 5) << endl;

    Node* root = new Node(1);
    root->children.push_back(new Node(7));
    root->children.push_back(new Node(9));
    root->children[0]->children.push_back(new Node(2));
    root->children[0]->children.push_back(new Node(6));
    root->children[1]->children.push_back(new Node(9));
    root->children[0]->children[1]->children.push_back(new Node(5));
    root->children[0]->children[1]->children.push_back(new Node(11));
    root->children[1]->children[0]->children.push_back(new Node(5));

    cout << "Height: " << treeHeight(root) << endl;
    cout << "Nodes: " << countNodes(root) << endl;

    int binArr[] = {0, 1, 2, 3, 4, 5, 6, 7}; 
    BinaryNode* bRoot = buildFromArray(binArr, 7, 1);
    if(bRoot) cout << "Bin Root: " << bRoot->data << " Left: " << bRoot->left->data << endl;

    BinaryNode* sRoot = buildSpecificBST();
    if(sRoot) cout << "Spec Root: " << sRoot->data << " Deep Node: " << sRoot->right->left->right->data << endl;

    return 0;
}