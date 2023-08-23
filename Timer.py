import time



now = "Time's up! - rain now!"


#   Basic Time set
######################
second = 1
minute = 60 * second
hour = 60 * minute
######################
rain = 1000 * second
######################
wait_time = 3850 * second
######################
wait_time_left = int


for x in range(wait_time, 0, -1):
    seconds = x % 60
    minutes = int(x / 60) % 60
    hours = int(x / 3600)
    wait_time_left = (f"{hours:02}:{minutes:02}:{seconds:02}")
    print(wait_time_left)
    time.sleep(1)



