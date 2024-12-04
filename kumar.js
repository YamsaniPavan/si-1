const user = {
    id: 1,
    name: "John Doe",
    age: 30,
    location: {
      city: "New York",
      state: "NY",
    },  
    hobbies: ["reading", "traveling", "coding"]
  };
  const { name, age, location: { city }, hobbies: [firstHobby] } = user;
  
  console.log(name);
  console.log(age);
  console.log(city);
  console.log(firstHobby);