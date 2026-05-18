import webbrowser
import random


sites = [
    "example.com",
    "https://dummyjson.com/",
    "https://github.com/DevAbdoTolba/mo8tarbeen",
    "https://www.kaggle.com/competitions/5-day-ai-agents-intensive-vibecoding-course-with-google/overview"
]

random_site = random.choice(sites)
webbrowser.open(random_site)