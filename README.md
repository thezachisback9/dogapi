## Dog Api
This web app lets users discover many random dog images along with consistent attributes for each. Users can ban certain attribute values to filter future results, and view a history of previously displayed dogs.

GIF walkthrough:

<img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW81NWx3Y3ZlZHUyajNva3M3ZGF3d2QwZHBuMG94dHlmY2ZqNGJ1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n7rCnftgWvY6X74XuW/giphy.gif' />
Tech used: HTML, CSS, JavaScript, React, Vite
This project fetches dog data from an API on button clicks, displaying one image with matching attributes at a time. Attributes are clickable to add them to a ban list, which filters out unwanted dog types from appearing again. The ban list updates dynamically and can be modified by clicking banned attributes. I also implemented a session history feature showing previously fetched dogs and attributes.

Lessons Learned:
I ran into a bug causing a blank page near the end but was able to fix it. Sometimes the dog images would cycle too quickly before settling on a result, and the ban list functionality occasionally didn’t work as expected due to how I handled adding values to the ban array. This project improved my understanding of managing API data, state updates, and dynamic filtering in React.
