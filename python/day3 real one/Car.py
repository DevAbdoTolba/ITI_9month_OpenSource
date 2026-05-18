class Car:
    def __init__(self, name, fuelRate, velocity):
        self.name = name
        self.fuelRate = fuelRate
        self.velocity = velocity

    def run(self, velocity, distance):
        fuel_consumed = (distance / 10) * 10
        self.fuelRate -= fuel_consumed
        self.velocity = velocity
        if self.fuelRate <= 0:
            self.stop(distance - (self.fuelRate * 10))
        elif self.fuelRate > 0:
            self.stop(0)

    def stop(self, remain_distance):
        self.velocity = 0
        if remain_distance > 0:
            print(f"You stopped with {remain_distance} km remaining.")
        elif remain_distance == 0:
            print("You have arrived at your destination.")

    # GETTER

    @property
    def velocity(self):
        return self._velocity
    
    @property
    def fuelRate(self):
        return self._fuelRate
    
    # SETTERS 

    @velocity.setter
    def velocity(self, value):
        if 0 <= value <= 200:
            self._velocity = value
        elif 0 > value > 200:
            raise ValueError("Velocity must be between 0 and 200.")
        
    @fuelRate.setter
    def fuelRate(self, value):
        if 0 <= value <= 100:
            self._fuelRate = value
        elif 0 > value > 100:
            raise ValueError("Fuel Rate must be between 0 and 100.")