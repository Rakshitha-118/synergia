const express = require('express');
const server = express();
server.use(express.json())

// Login route
// server.get('/login', (request, response) => {
//     const email = request.query.email;
//     const password = request.query.password;

//     if (email === "varshak935308@gmail.com" && password === "varsha123") {
//         response.send('Login Successful');
//     } else {
//         response.send('Login Failed');
//     }
// });


//deconstructor is used
let students=[]
server.post('/student/add',(request,response)=>{
    response.send(students)
})

server.delete('/student/:usn',(request,response)=>{
    students=students.filter((student)=>
    student.usn !=request.params.usn)
    response.send('student deleted')
})
server.post('/student/add',(request,response)=>{
    const{usn,name,age,phone}=request.body;
    student.push({
        usn,
        name,
        phone,
        age,
    });
response.send('student added')
});





server.post('/login', (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    if (email === "raksh@gmail.com" && password === "pass123") {
        response.send('Login Successful');
    } else {
        response.send('Login Failed');
    }
});





// Home route
server.get('/', (request, response) => {
    const fname = 'rakshitha';
    const lname = 'N';
    const usn = '4SF23IS077';
    response.send("My Name is: ${fname} ${lname}<br>USN: ${usn}");
});

// Start server
server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});