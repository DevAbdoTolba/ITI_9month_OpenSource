#include <iostream>
#include "Product.h"

using namespace std;

int main() {

    Product p1;                                        // default
    Product p2("Gaming Laptop", 28500.5, 3);           // parameterized
    Product p3 = p2;                                   // copy

    p1.setName("Mechanical Keyboard");
    p1.setPrice(1200);
    p1.setQuantity(15);

    cout << "\nDoing some errors (should be rejected):\n";
    p1.setName("");
    p1.setPrice(-500);
    p1.setQuantity(-8);

    Product store[5];
    store[0] = p1;
    store[1] = p2;
    store[2] = p3;

    string n;
    double pr;
    int q;

    cout << "\nAdd product #4:\n";
    cout << "Name: ";
    cin.ignore();
    getline(cin, n);
    cout << "Price: ";
    cin >> pr;
    cout << "Quantity: ";
    cin >> q;
    store[3] = Product(n, pr, q);

    cout << "\nAdd product #5:\n";
    cout << "Name: ";
    cin.ignore();
    getline(cin, n);
    cout << "Price: ";
    cin >> pr;
    cout << "Quantity: ";
    cin >> q;
    store[4] = Product(n, pr, q);

    // show koloh
    cout << "\nAll products in store:\n";
    for (int i = 0; i < 5; i++) {
        cout << "---- Product " << i+1 << " ----\n";
        store[i].printInfo();
    }

    double total = 0, totalWithTax = 0;
    for (int i = 0; i < 5; i++) {
        total += store[i].calculateTotalPrice();
        totalWithTax += store[i].calculatePriceWithTax();
    }

    cout << "Total inventory (no tax) : " << total << " EGP\n";
    cout << "Total inventory (with tax): " << totalWithTax << " EGP\n\n";

    cout << "Auditing some products...\n";
    auditProduct(p2);
    auditProduct(store[4]);

    cout << "End of program - watch the destructors!\n";
    return 0;
}
