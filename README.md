# T3A2 Off The Leash

## ℹ Purpose (R1)

> “Everyone thinks they have the best dog. And none of them are wrong.” – W.R. Purche

Over one third of households in Australia have a pet dog, giving Australia one of the highest rates of pet ownship in the world. That's over 3.6 million households with a dog eagerly waiting at the front door for it's owner, snoozing on the couch in the sun, or chasing a ball around the garden. Dogs are traditionally known as "man's best friend" and many people consider them part of their family. This app is designed to help people include their four legged family member in day-to-day activities in addition to planning outing the whole family can enjoy.

The app is designed to help people find locations and plan activities that are "dog-friendly". This might be an off-lead park, a cafe that welcomes dogs or even to Bunnings for a sausage. Users can search the location of places and see what facilities there are for them and their four legged friend.

## Features

Off the Leash will allow users to:

- Search for places that are dog-friendly
- See locations on a map and in a list
- See a description of the place, facilities that are available, images and reviews
- Share reviews and images of places they have visited
- Add new places to the database
- Request admin modify or delete a location from the database

## Target audience

- THe target audience for this app is anyone looking for places that are dog-friendly in some way. They may be looking a cafe close to home they can regularly go to, or further afield if say, they are planning a car trip and after places they can stop to stretch their dogs legs. They may be after an fenced area they can do training or just somewhere to socialise and make friends (2 and 4 legged variety).

## Tech stack

### Front end

- React
- CSS

### Back end

- Ruby on Rails API
- PostgreSQL database
- Knock JWT authentication

### Third Party

- Geolocation API

### Deployment

- Heroku web server for Rails database
- Netlify for React frontend

## Diagrams

### Dataflow Diagram (R2)

TO COME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

![Dataflow Diagram](./docs/diagrams/dataflow.png)

### Architect Diagram (R3)

![Architecture Diagram](./docs/diagrams/architecture.png)

### ERD

![ERD](./docs/diagrams/erd.png)

[Link to ERD](https://dbdiagram.io/d/600b7dd380d742080a3785d0)

## Trello board

We used Trello as a project management tool. This helped us visualise our progress, keep track of timeframes, and assign priority.

Trello Board at the start
![Trello 1](./docs/trello/trello1.png)

Trello Board part way through
![Trello 2](./docs/trello/trello2.png)
![Trello 3](./docs/trello/trello3.png)

Trello Board at the end

<!-- ![Trello 4](./docs/trello/trello4.png) -->

[Link to Trello Board](https://trello.com/b/113nxQTJ/off-the-leash)

## User Stories (R4)

### Initial MVP

- As a user I want a convenient way to see what facilities are available so that I know what is available.
- As a user I want to see locations of facilities, so I know where it is.
- As a user I want to see facilities on a map so that I can visualize where they are.
- As a user I want to be able to add facilities so that I can contribute to the database.
- As a user I want to be able to request admin edit or delete places so that information is always up-to-date but protected from malicious behavior.
- As a user I want to be able to rate and comment on places so that there is more feedback on the location.

### Stretch Goals

- As a user I want to see the distance of a facility based on my current location so that I know how far it is.
- As a user I want a webpage that is visually appealing with animations so that I enjoy using the website.

## Wireframes (R5)

Considering our app is about family activities and location to visit with your dog, we decided on a playful theme when designing our wireframes. Our inspiration was:

![Theme](./docs/inspo.png)

Source: <https://wearepretendfriends.com/dog-park>

Our wireframes take into account a variety of screen sizes.

Landing Page:

![Landing](./docs/wireframes/landing.png)

Individual Location:

![Location](./docs/wireframes/location.png)

Index of Results:

![Results](./docs/wireframes/results.png)

Add a New Location:

![New Location](./docs/wireframes/new.png)

Request to Modify or Delete an Existing Location:

![Modify Location](./docs/wireframes/modify.png)

Submit a Review or Upload Pictures:

![Write a review](./docs/wireframes/review.png)
