#include <iostream>
#include "Class/Room.h"

using namespace std;

int main() {
    cout << "=== SHEMS Simulator v1.0 ===" << endl;
    cout << "System Start. Active Devices: " << SmartDevice::GetCount() << endl;

    SmartDevice ac("Master Bedroom AC", 50);
    SmartDevice tv("OLED Smart TV", 10);
    SmartDevice lamp("Philips Hue Lamp", 100);

    cout << "Devices Created. Active Count: " << SmartDevice::GetCount() << endl;

    cout << endl << endl;
    cout << "AC Status (Pre): " << ac << endl;

    ++ac;
    ++ac;

    cout << "AC Status (Post): " << ac << endl;

    ac.AddConsumption(2.5);
    ac.AddConsumption(3.0);
    ac.AddConsumption(3.5);

    tv.AddConsumption(0.15);
    lamp.AddConsumption(0.05);

    cout << endl << endl;

    {
        SmartDevice acBackup = ac;
        cout << "Backup Device Created." << endl;
        cout << "Backup Status: " << acBackup << endl;

        ac.AddConsumption(10.0);

        cout << "Original AC (Modified): " << ac << endl;
        cout << "Backup AC (Should be Unchanged): " << acBackup << endl;
    }

    cout << "Backup device destroyed safely. Test Passed." << endl;

    cout << endl << endl;

    Room livingRoom("Living Room");

    livingRoom.AddDevice(ac);
    livingRoom.AddDevice(tv);
    livingRoom.AddDevice(lamp);

    livingRoom.PrintDevices();

    cout << endl << endl;

    double combined = ac + tv;
    cout << "Quick Sum (AC + TV): " << combined << " kWh" << endl;

    cout << endl << "=== Simulation Complete ===" << endl;
    return 0;
}
