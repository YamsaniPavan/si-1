const takeABreak = () => {
    console.log("Time to enjoy a break!");
  };
  
  // Call the function every 3 seconds (3000 milliseconds)
  const intervalId = setInterval(takeABreak, 3000);
  
  // Optionally, stop the reminder after 10 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Break reminders stopped.");
  }, 10000);
  