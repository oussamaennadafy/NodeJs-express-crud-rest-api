# CRUD_Api_Node
In this project, we are going to create node CRUD api with express and mongodb.

#### To Run this project Clone it and install modules using
```
npm install
```

Then Create config.env file and create PORT and MONGO_URI Variable and specify Value.
That's it. You are ready to go. To execute this project just type
```
npm start
```
### End points of this project 

#### http://localhost:PORT/api/trips

method: POST

Role: create Trip

fileds: 

 depart_city 
 arrive_city 
 depart_date 
 arrive_date
 price

#### http://localhost:PORT/api/trips

method: GET

Role: Read Trips

#### http://localhost:PORT/api/trips/id

method: PUT

Role: update Trip

fileds: 

 id
 depart_city 
 arrive_city 
 depart_date 
 arrive_date
 price


 #### http://localhost:PORT/api/trips/id

method: DELETE

Role: delete Trip

fileds: 

 id



Enjoy...!
