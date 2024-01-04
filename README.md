# <span style="color:red">Important Notice</span>

This project has been re-appropriated to run in a Kubernetes cluster instead of
Heroku due to Heroku removing their free tier option.

The nature of this repo and the backend repo already being dockerized and
existing in separate repositories made them perfect to be incorporate into a
cluster netting higher scalability and control.

I've left the old README in place as a sort of 'heritage' to my early days of
programming:

---

## Context

Mass Effect Crewed is a micro-app to easily see which crewmates you havn't
picked recently, for each Mass Effect game in the trilogy.

The final product can be used here: https://mass-effect-crewed.herokuapp.com/

Note: Since this is deployed to Heroku free-tier it can take some time to load,
even report not responding, this is normal. Simply refresh or wait about 30
seconds.

## Tutorial

Login and select which game you're playing.

![Login](https://user-images.githubusercontent.com/42459707/112561197-d0550180-8e28-11eb-970d-b1c2468d619e.PNG)
![MainMenu](https://user-images.githubusercontent.com/42459707/112561304-0f835280-8e29-11eb-97ba-0c7994b67848.PNG)

2 of the 4 crewmates you havnt picked for the longest time will randomly be
shown to you, you can re-shuffle these four with the spinning-arrow icon.

![gameview](https://user-images.githubusercontent.com/42459707/112561397-3b063d00-8e29-11eb-814c-a1f3da283a9a.PNG)
![Refresh](https://user-images.githubusercontent.com/42459707/112561399-3b9ed380-8e29-11eb-8d14-59893864069a.PNG)

When you've made your selection, hit confirm and those 2 crew mates will be
circulated to the back of the crew waitlist.

You can add crew mates as you unlock them using the '+' icon and entering a
name. By default they are sent to priority for a next pick.

![Adding](https://user-images.githubusercontent.com/42459707/112561438-55d8b180-8e29-11eb-9925-068159cca436.PNG)

If a crew member dies/leaves, select the 'show more' drop down and tap them to
delete.

![CewList](https://user-images.githubusercontent.com/42459707/112561468-65f09100-8e29-11eb-8382-97a8efef7d67.PNG)

Every Add/Confirm/Delete is automatically saved to your profile.

## Why?

I wanted to learn ReactJS, user-session and refine my continuous deployment
skills.

Besides the initial authentication the entire app never reloads and maintains
unique user data.

## Installation

To run on your local machine:

- Clone or download this repo to your chosen directory.
- Ensure you have Node.js installed
- Open command prompt in this directory and type 'npm install'
- Next type 'npm start'
- To test, run 'npm test'

## Tech Stack

- Javascript
- Node.Js / ExpressJS
- React
- Docker / Compile
- CircleCI
- Heroku
