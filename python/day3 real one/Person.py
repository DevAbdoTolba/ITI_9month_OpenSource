from abc import ABC, abstractmethod

class Person(ABC):
    moods = ("happy", "tired", "lazy")

    def __init__(self, name, money, mood, healthRate):
        self.name = name
        self.money = money
        self.mood = mood
        self.healthRate = healthRate

    @abstractmethod
    def sleep(self, hours):
        pass

    @abstractmethod
    def eat(self, meals):
        pass

    @abstractmethod
    def buy(self, items):
        pass

