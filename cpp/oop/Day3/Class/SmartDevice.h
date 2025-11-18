#include <iostream>
#include <string>

using namespace std;

class SmartDevice {
private:
    string name;
    double powerLevel;
    double energyConsumption;
    int* history;

public:
    static int deviceCount;

    SmartDevice() {
        name = "Generic Device";
        powerLevel = 0;
        energyConsumption = 0;

        history = new int[3];
        for (int i = 0; i < 3; i++) {
            history[i] = 0;
        }
        deviceCount++;
    }

    SmartDevice(string n, double p) {
        name = n;
        energyConsumption = 0;

        if (p < 0) {
            powerLevel = 0;
        } else if (p > 100) {
            powerLevel = 100;
        } else {
            powerLevel = p;
        }

        history = new int[3];
        for (int i = 0; i < 3; i++) {
            history[i] = 0;
        }

        deviceCount++;
    }

    SmartDevice(const SmartDevice& other) {
        name = other.name;
        powerLevel = other.powerLevel;
        energyConsumption = 0;

        history = new int[3];
        for (int i = 0; i < 3; i++) {
            history[i] = other.history[i];
        }

        deviceCount++;
        cout << "Copied" << name << endl;
    }

    ~SmartDevice() {
        delete[] history;
        deviceCount--;
    }

    SmartDevice& operator=(const SmartDevice& other) {
        if (this != &other) {
            delete[] history;

            name = other.name;
            powerLevel = other.powerLevel;
            energyConsumption = 0;

            history = new int[3];
            for (int i = 0; i < 3; i++) {
                history[i] = other.history[i];
            }
        }
        return *this;
    }

    void AddConsumption(double amount) {
        energyConsumption = energyConsumption + amount;

        history[0] = history[1];
        history[1] = history[2];
        history[2] = (int)amount;
    }

    static int GetCount() {
        return deviceCount;
    }

    SmartDevice& operator++() {
        powerLevel = powerLevel + 5;
        if (powerLevel > 100) {
            powerLevel = 100;
        }
        return *this;
    }

    double operator+(const SmartDevice& other) const {
        return energyConsumption + other.energyConsumption;
    }

    friend ostream& operator<<(ostream& os, const SmartDevice& device) {
        os << device.name << " Power: " << device.powerLevel << "%"
           << ", Total Energy: " << device.energyConsumption << "kWh"
           << ", History: {" << device.history[0] << ", "
           << device.history[1] << ", " << device.history[2] << "}";
        return os;
    }
};

int SmartDevice::deviceCount = 0;
