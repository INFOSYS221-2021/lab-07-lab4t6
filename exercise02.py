# Exercise Two
import datetime

# print the current date and time
datetime_object = datetime.datetime.now()
print("Current date and time: ", datetime_object)

# modify the following print statements using datetime_object appropriately
print("Current year: ", datetime_object.year)
print("Current month: ", datetime_object.strftime("%B")
print("Current day: ", datetime_object).strftime("%A") 
print("Current time: ", datetime_object)

# modify the following statement that creates another datetime_object.
# the second datetime_object contains information about yesterday
datetime_object2 = datetime_object - datetime.timedelta(days=1) 

# print yesterday's date and time
print("Yesterday's date and time: ", datetime_object2)

# modify the following statement to print the current date and time in
# dd-mm-YY H:M:S format
datetime_object3 = datetime_object
print("Current date and time: ", datetime_object3.strftime("%d/%n/%y %h:%m:%s")) 
