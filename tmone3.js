const express=require("express");
const app=express();
const oracle=require("oracledb");
const bodyParser=require("body-parser");
const urlEncodedBodyParser=bodyParser.urlencoded({extended:false});
class Student
{
constructor(id,name,job_type,company,salary,salary_type)
{
this.id=id;
this.name=name;
this.placementType=job_type;
this.company=company;
this.salary=salary;
this.salaryType=salary_type;
}
}
app.get("/placements",async function(request,response){
var connection=null;
var students=[];
connection=await oracle.getConnection({"user":"hr","password":"hr","connectionString":"localhost:1521/xepdb1"});
var resultSet=await connection.execute("select id,name,job_type,company,salary,salary_type from student order by id");
resultSet.rows.forEach(function(row){
students.push(new Student(row[0],row[1],row[2],row[3],row[4],row[5]));
});
response.send(students);
})
app.post("/addPlacement",urlEncodedBodyParser,async function(request,response){
console.log(request.body);
console.log(request.body.id);
console.log(request.body.name);
console.log(request.body.company);
console.log(request.body.salary);
console.log(request.body.salaryType);


var id=request.body.id;
var name=request.body.name;
var placementType=request.body.placementType;
var company=request.body.company;
var salary=request.body.salary;
var salaryType=request.body.salaryType;
var connection=null;
connection=await oracle.getConnection({"user":"hr","password":"hr","connectionString":"localhost:1521/xepdb1" });
var resultSet=await connection.execute(`select * from student where id=${id}`);
if(resultSet.rows.length>0)
{
await connection.close();
response.send({"success":"false","error":id+" exists "});
return;
}

await connection.execute(`insert into student
values (${id},'${name}','${placementType}','${company}',${salary},'${salaryType}')`);
await connection.commit();
await connection.close();
response.send({"success":"true"});

})




app.post("/updatePlacement",urlEncodedBodyParser,async function(request,response){
var id=request.body.id;
var name=request.body.name;
var placementType=request.body.placementType;
var company=request.body.company;
var salary=request.body.salary;
var salaryType=request.body.salaryType;
var connection=null;
connection=await oracle.getConnection({"user":"hr","password":"hr","connectionString":"localhost:1521/xepdb1"});
var resultSet=await connection.execute(`select * from student where id=${id}`);
if(resultSet.rows.length==0)
{

await connection.close();
response.send({"success":false,"error":id+"does not exist"});
return;
}
await connection.execute(`update student set name='${name}',company='${company}' 
,salary=${salary},salary_type='${salaryType}' where id=${id} `);
await connection.commit();
await connection.close();
response.send({"success":true});
})
app.post("/deletePlacement",urlEncodedBodyParser,async function(request,response){
var id=request.body.id;
var connection=null;
connection=await oracle.getConnection({"user":"hr",password:"hr","connectionString":"localhost:1521/xepdb1"});
var resultSet=await connection.execute(`select * from student where id=${id}`);
if(resultSet.rows.length==0)
{
await connection.close();
response.send({"success":false,"error":id+"does not exist"});
return;
}
await connection.execute(`delete from student where id=${id}`);
await connection.commit();
await connection.close();
response.send({"success":true});
})


app.listen(5050,async function(err){
if(err)
{
return console.log(err);
}
console.log("server is listening on port 5050");
})