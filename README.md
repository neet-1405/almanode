#AlmaBetter Backend Project 
##Get_Youtube_Subscribers

This is a simple backend project that contains a RESTful API for getting
information about YouTube channel subscribers. The project is developed with 
Node.js and Express, and the database used for managing the subscriber
data is MongoDB. The subscriber's data consists of fields such as their ID,
Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such 
as an endpoint that returns a list of all subscribers, an endpoint that 
returns a list of names and subscribed channels for each subscriber, and an
endpoint that returns information about a subscriber based on their ID


## API Endpoints 
1. **"/ "** -> This default route will render the "index.html file" when the app launches. http://localhost:8020/



<img width="960" alt="Screenshot 2024-01-09 115333" src="https://github.com/neet-1405/almanode/assets/142343452/4e380d57-3c1c-47e9-95d3-f005583bd6d8">




2. **"/subscribers "** -> This endpoint returns an array of all subscribers in the database. http://localhost:8020/subscribers





<img width="842" alt="Screenshot 2024-01-09 115609" src="https://github.com/neet-1405/almanode/assets/142343452/fd4d7eaa-4e59-47ad-867f-aa3e976cb157">



3. **"/subscribers/names "** -> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. http://localhost:8020/subscriberss/names





<img width="904" alt="Screenshot 2024-01-09 120022" src="https://github.com/neet-1405/almanode/assets/142343452/4cbb2735-da40-4203-b10b-86627ccd7e13">






4. **"/subscribers/:id "** -> This returns the details of subscriber whose Id is provided in endpoint. http://localhost:8020/subscribers/:id





<img width="788" alt="Screenshot 2024-01-09 120153" src="https://github.com/neet-1405/almanode/assets/142343452/243905db-cd73-46de-97a1-ff344175ae7d">



## Application Folder Structure
1. [src/users.js] -> For handling requests and responses.

2. [/index.js] -> To connect and start the server.

3. [src/createdatabase.js] -> To create database on MongoDB.

4. [src/data.js] -> Data that has to be connnected to a database.

5. [src/models/schema.js] -> For the schema.
   
6. [/index.html] -> The home page for the application.



## Installation 

You'll need to have **Node.js** and **MongoDB** installed on your computer in order to begin working on the project. 

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install <packageName>**.



Start the server by **npm run server**



## Dependencies
Following dependencie are needed to run this application: 

1. express

2. mongoose

3. nodemon


## Deployment

Web Deployment :https://almanode.vercel.app/

after open once reload it

1) Neetesh Parashar
2) Pooja Ahirwar






