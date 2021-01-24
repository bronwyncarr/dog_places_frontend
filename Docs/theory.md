# Initial MVP
- As a user I want a convenient way to see what facilities are available so I know what is there.
- As a user I want to see locations of facilities, so I know where it is.
- As a user I want to see facilities on a map so that I can visualize where they are. 
- As a user I want to be able to add facilities so that I can contribute to the database
- As a user I want to be able to edit or delete places I added.
- As a user I want to be able to rate and comment on places so that there is more feedback on the facilities.

## Stretch Goals
- As a user I want to see the distance of a facility from my current location.
- pull data from a separate API for extra data 

## Tech stack
- Ruby on rails 
- React
- geolocation api
- twilio for notifications
- postgresql 
- heroku
- netlify 
- JWT 
- Knock


# Relations 
## user 
name:
password:
email: 
 
## role
type:
user_id FK

## location
user_id FK ? , make this need a user id?
type:
name: 
longitude:
latitude:
rating: integer
<!-- has many facilities? or include them as a boolean check before submiting the location? i.e on location parking: Boolean etc 
size?
# facility
type:
location_id FK  -->

## comment
user_id FK 
location_id FK
body: string
 # components we need? 
 - index page 
 - show page
 - login/ signup page? make them in one and render different items based on a toggle.
 - new page
 - edit which extends from new? or just pass down props? 
 - index needs a delete button / favorite 
 - show page needs comment system
- the actual map, render this at the top or in a seperate window for mobile devices? make index page the map but if user selects show as list it switches? 

# TO DO (Part A)
- DataFlow diagram 
-  Application Architecture Diagram
- Wireframes
# TO DO (Part B)
- Literally everything LMAO 
