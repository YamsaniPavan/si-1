const userProfile = {
    name: 'Pavan',
    age: 30,
    address: {
      street: 'Gandhi Road',
      city: 'Koheda',
      zip: '50537'
    },
    friends: [
      { name: 'sumith', age: 22 },
      { name: 'bobby', age: 25 }
    ]
  };
  
  const {
    name,
    address: { city, zip },
    friends: [{ name: firstFriend,age }, { name: secondFriend }]
  } = userProfile;
  
  console.log(name); 
  console.log(city); 
  console.log(zip); 
  console.log(firstFriend, age); 
  console.log(secondFriend); 
  