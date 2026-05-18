# task 1
number = 10
start = 1
end = 20
if (number >= start and number <= end):
    print(True)
else:
    print(False)



# task 2
age = 25
have_coupon = False
if(((age < 18) or (age > 65)) or have_coupon):
    print(True)
else:
    print(False)


# task 3
name = "Tolba"
print("Hello, " + name + "!")

# task 4
full_name = "Abdo Tolba"
full_name_split = full_name.split()
initials = full_name_split[0][0] + full_name_split[-1][0]


# task 5
name_task5 = "Tolba"
age_task5 = 21
print("{} is {} years old.".format(name_task5, age_task5))




# lab
# I
vowels = ['a', 'e', 'i', 'o', 'u']
word = "mobile"

for vowel in vowels:
    word = word.replace(vowel, "")


# II

charchter = "i"

word_ii = "This is javascript"

locations = []

for i in range(len(word_ii)):
    if word_ii[i] == charchter:
        locations.append(i)
