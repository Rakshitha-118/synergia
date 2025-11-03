const express = require('express');
const server = express();

// Middleware to parse JSON
server.use(express.json());

// Variables to store profile data
let profile = {
  name: "",
  age: 0,
  email: "",
  city: "",
  college: ""
};

// POST API — create profile
server.post('/create-profile', (request, response) => {
  const { name, age, email, city, college } = request.body;

  // Store data in variables
  profile.name = name;
  profile.age = age;
  profile.email = email;
  profile.city = city;
  profile.college = college;

  console.log("Profile Created:");
  console.log(profile);

  response.send("Profile created successfully!");
});

// GET API — get full profile
server.get('/get-profile', (request, response) => {
  response.json(profile);
});

// GET API — get only name and college
server.get('/get-summary', (request, response) => {
  response.json({
    message: `Hello ${profile.name} from ${profile.college}!`
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server started on port 3000");
});