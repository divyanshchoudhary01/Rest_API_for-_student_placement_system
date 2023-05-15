# Rest_API_for-_student_placement_system
REST API for a Student placement System developed with Node.js, Express.js, Oracle database express edition (SQL),and more.

The Model-View-Controller Architecture was used, except for the the views as this is a backend project.

ARC API Client was used to test the HTTP request/response flow.
## Project Demonstration Video


## API END POINTS
#### `GET /placements`
return the placement data of the studnets
![image](https://github.com/divyanshchoudhary01/Rest_API_for-_student_placement_system/assets/62482950/9dfaa74d-c2c8-4cc6-85a5-95bc900e36bb)

#### `GET /addPlacement`
with this you can add the student placement record.
![image](https://github.com/divyanshchoudhary01/Rest_API_for-_student_placement_system/assets/62482950/b456501e-dae0-4808-8272-e220484b2588)

#### `POST /updatePlacement`
with this ,you can update student placement data by passing updated content of your choice.
![image](https://github.com/divyanshchoudhary01/Rest_API_for-_student_placement_system/assets/62482950/a8e59300-b3b7-455c-b1e4-820c42993280)

#### `POST /deletePlacement`
with this ,you can delete student placement record by passing student id which is the primary key in the table.
![image](https://github.com/divyanshchoudhary01/Rest_API_for-_student_placement_system/assets/62482950/402e606e-765f-4fd0-be03-991f863f07fa)


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
