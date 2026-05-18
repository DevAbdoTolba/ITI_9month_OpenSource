from Person import Person

class Employee(Person):

    moods = ("happy", "tired", "lazy")

    def __init__(self, name, money, mood, healthRate, id, car, email, salary, distanceToWork):
        super().__init__(name, money, mood, healthRate)
        self.id = id
        self.car = car
        self.email = email
        self.salary = salary
        self.distanceToWork = distanceToWork


    def work(self, hours):
        if hours == 8:
            self.mood = "happy"
        elif hours > 8:
            self.mood = "tired"
        elif hours < 8:
            self.mood = "lazy"
    
    def drive(self, distance):
        velocity = self.car.velocity
        self.car.run(velocity, distance)

    def refuel(self, gasAmount = 100):
        self.car.fuelRate += gasAmount

    def send_mail(self, to, subject, msg, receiver_name):
        from email import emailComposer
        emailComposer(subject, self.email, to, receiver_name, msg)

    


    #  IMPLEMENETATIONS

    def sleep(self, hours):
        if hours == 7:
            self.mood = "happy"
        elif hours < 7:
            self.mood = "tired"
        elif hours > 7:
            self.mood = "lazy"

    def eat(self, meals):
        if meals == 3:
            self.healthRate = 100
        elif meals == 2:
            self.healthRate = 75
        elif meals == 1:
            self.healthRate = 50

    def buy(self, items):
        self.money -= items * 10



    # GETTERS
    @property
    def salary(self):
        return self._salary
    
    @property
    def email(self):
        return self._email
    
    @property
    def healthRate(self):
        return self._healthRate
    
    # SETTERS
    @salary.setter
    def salary(self, value):
        if value >= 1000:
            self._salary = value
        elif value < 1000:
            print("Salary must be 1000 or more")

    @email.setter
    def email(self, value):
        from re import match
        if match(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", value):
            self._email = value
        else:
            print("Invalid email format")

    @healthRate.setter
    def healthRate(self, value):
        if 0 <= value <= 100:
            self._healthRate = value
        elif 0 > value > 100:
            print("Health rate must be between 0 and 100")