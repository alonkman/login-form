  function login() {
      const usernameN = document.getElementById("username").value;
      const password = "1234";
      const pswUser = document.getElementById("password").value;
      const alertN = document.getElementById("alert");
      if (
        usernameN.length >= 5 && usernameN.length <= 10 && pswUser === password && gender) {
        alertN.innerHTML = "Welcome";
        alertN.style.color = "green";
        alertN.style.textAlign = "center";
        alertN.style.fontFamily = "sans-serif";
        
      } else {
        alertN.innerHTML = "Something went wrong!";
        alertN.style.color = "red";
        alertN.style.textAlign = "center";
        alertN.style.fontFamily = "sans-serif";
      }

  if (usernameN.length < 5 || usernameN.length > 10) {
  alert("Username must be between 5 and 10 characters long.");
  return;
  }

  if (pswUser !== password) {
  alert("Incorrect password.");
  return;
  }

  alertN.innerHTML = "Welcome";
  alertN.style.color = "green";
  }
    
  function showChart() {
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const chart = document.getElementById("chart");
    if (age >= 18 && age <= 100 && gender) {
      chart.innerHTML = "Good for you, you are " + age + " years old,  and you identify as " + gender.value + ".";
    } else if (!gender) {
      chart.innerHTML = "Please select your gender.";
    } else {
      chart.innerHTML = "Age must be between 18 and 100.";
    }
  }