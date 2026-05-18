# - ITI is an Office that has many employees and Samy is one of them.
# - Samy is an Employee and He has a fiat 128 Car.
# - The distance from Samy Home to ITI Smart Village Office is 20 km.
# - Samy should arrive to ITI at before 9:00 unless that he will be late.
# - Velocity (v) = Distance(d) / time(t).
# - FuelRate decrease by10% every 10km distance.

# Save the previous data of the ITI office in a json file.

from Car import Car
from Employee import Employee
from Office import Office

if __name__ == "__main__":
    # Create a Car instance for Samy
    samy_car = Car(name="Fiat 128", fuelRate=100, velocity=60)

    # Create an Employee instance for Samy
    samy = Employee(name="Samy", money=1000, mood="happy", healthRate=100, id=1, car=samy_car, email="samy@iti.com", salary=5000, distanceToWork=20)
    # Create an Office instance for ITI
    iti_office = Office(name="ITI Smart Village")
    # Hire Samy to the ITI office
    iti_office.hire(samy)
    # Check if Samy is late when he leaves at 8:30
    lateness_status = iti_office.check_lateness(empId=1, moveHour=8.5)
    print(f"Samy's lateness status: {lateness_status}")
    # Export the ITI office data to a json file
    iti_office.export()

