#include <iostream>
#include <string>

using namespace std;

class Product {
private:
    string name;
    double price;
    int quantity;
    static int productCount;
    int productCode;

public:
    // CONSTRACTORS
    Product() {
        name = "Unknown";
        price = 0.0;
        quantity = 0;
        productCode = ++productCount;
        cout << "Created product " << productCode << " (default)\n";
    }

    Product(string n, double p, int q) {
        name = n;
        price = (p >= 0 ? p : 0);
        quantity = (q >= 0 ? q : 0);

        if (n.empty()) name = "NoName";

        productCode = ++productCount;
        cout << "Created product " << productCode << " - " << name << endl;
    }

    Product(const Product& other) {
        // gpt was used here :)
        name = other.name;
        price = other.price;
        quantity = other.quantity;
        productCode = ++productCount;
        cout << "Copied product " << other.productCode
             << " → new code " << productCode << endl;
    }

    ~Product() {
        cout << "Product " << productCode << " destroyed.\n";
    }

    // SETTERS

    void setName(string n) {
        if (n.empty()) {
            cout << "Name can't be empty! keeping old one.\n";
            return;
        }
        name = n;
    }

    void setPrice(double p) {
        if (p < 0) {
            cout << "Price can't be negative!\n";
            return;
        }
        price = p;
    }

    void setQuantity(int q) {
        if (q < 0) {
            cout << "Quantity can't be negative!\n";
            return;
        }
        quantity = q;
    }

    // GETTERS
    string getName() { return name; }
    double getPrice()     { return price; }
    int getQuantity()    { return quantity; }
    int getProductCode()  { return productCode; }

    // CODE
    double calculateTotalPrice() const {
        return price * quantity;
    }

    double calculatePriceWithTax(double taxRate = 0.14) const {
        return calculateTotalPrice() * (1 + taxRate);
    }

    void printInfo()  {
        cout << "Code      : " << productCode << endl;
        cout << "Name      : " << name << endl;
        cout << "Price     : " << price << endl;
        cout << "Quantity  : " << quantity << endl;
        cout << "Total     : " << calculateTotalPrice() << "\n\n";
    }

    friend void auditProduct(const Product& p);
};

int Product::productCount = 0;


// BAD function :)
void auditProduct(const Product& p) {
    cout << "========== AUDIT REPORT ==========\n";
    cout << "Name         : " << p.name << endl;
    cout << "Price        : " << p.price << endl;
    cout << "Quantity     : " << p.quantity << endl;
    cout << "Total Value  : " << p.calculateTotalPrice() << endl;
    cout << "Product Code : " << p.productCode << endl;
    cout << "==================================\n\n";
}
