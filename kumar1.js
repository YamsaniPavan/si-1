function displayUserInfo({ name = 'Guest', profile: { age = 25, country = 'Unknown' } }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
  }
  
  const user = {
    name: 'Mike',
    profile: { age: 30, country: 'Canada' }
  };
  
  displayUserInfo(user);
 //displayUserInfo({});
  
  