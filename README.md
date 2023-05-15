# Rest_API_for-_student_placement_system
REST API for a Student placement System developed with Node.js, Express.js, Oracle database express edition (SQL),and more.

The Model-View-Controller Architecture was used, except for the the views as this is a backend project.

ARC API Client was used to test the HTTP request/response flow.
## Project Demonstration Video


## API END POINTS
#### `GET /placements`
return the placement data of the studnets
#### `GET /addPlacement`
with this you can add the student placement record.
#### `POST /updatePlacement`
with this ,you can update student placement data by passing updated content of your choice.
#### `POST /deletePlacement`
with this ,you can delete student placement record by passing student id which is the primary key in the table.

## Implemented Features

+ Add Student placement data
+ Student placement data updation
+ Student placement data (by id) deletion
+ View all data of the students 
+ View data from a specific student  (by ID)
+ Error handling through error message response

## Technology Stack

+ Node.js
+ Express.js
+ ARC (Advanced Rest API Client)  to test all API HTTP Resquests/Responses and database behavior accordingly
+ SQL via Oracle database express edition
+ Model-View-Controller Architecture (MVC Framework except Views as it's all backend)
