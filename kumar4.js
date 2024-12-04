const simulateTask = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccessful = Math.random() > 0.5; // 50% chance of success
  
        if (isSuccessful) {
          resolve("Task completed successfully!");
        } else {
          reject("Task failed.");
        }
      }, 2000);
    });
  };
  
  // Call the simulateTask function
  simulateTask()
    .then(result => {
      console.log(result); // "Task completed successfully!"
    })
    .catch(error => {
      console.log(error); // "Task failed."
    });
  