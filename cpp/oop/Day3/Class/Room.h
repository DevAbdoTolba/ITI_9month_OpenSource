#include <iostream>
#include "SmartDevice.h"

using namespace std;

class Room {
private:
    string roomName;
    SmartDevice devices[3];
    int currentDeviceIndex;

public:
    Room(string name) {
        roomName = name;
        currentDeviceIndex = 0;
    }

    void AddDevice(SmartDevice dev) {
        if (currentDeviceIndex < 3) {
            devices[currentDeviceIndex] = dev;
            currentDeviceIndex++;
        } else {
            cout << "Warning: Room " << roomName << " is full." << endl;
        }
    }

    double CalculateTotalConsumption() {
        double total = 0.0;
        SmartDevice tempDevice;

        for (int i = 0; i < currentDeviceIndex; i++) {
            total = total + (tempDevice + devices[i]);
        }
        return total;
    }

    void PrintDevices() {
        cout << endl << "--- Room Status: " << roomName << " ---" << endl;

        if (currentDeviceIndex == 0) {
            cout << "Room is empty." << endl;
        } else {
            for (int i = 0; i < currentDeviceIndex; i++) {
                cout << "Slot " << i + 1 << ": " << devices[i] << endl;
            }
        }

        cout << "Total Room Energy Draw: " << CalculateTotalConsumption() << " kWh" << endl;
        cout << "---------------------------------" << endl;
    }
};
