const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  //stop form from [page] reloading
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  const today = new Date();
  const dateInput = new Date(dob);

  if (phoneNumber.length !== 10) {
    alert("phone number must be 10 digits");
  } else if (firstName.length > 20 || lastName.length > 20) {
    alert("name should be less than 20 characters");
  } else if (phoneNumber.charAt(0) !== "0" || phoneNumber.charAt(1) !== "7") {
    alert("phone number should start with a 0");
  } else if (dateInput > today) {
    alert("please enter a valid date");
  } else if (
    firstName.charAt(0) !== firstName.charAt(0).toUpperCase() ||
    lastName.charAt(0) !== lastName.charAt(0).toUpperCase()
  ) {
    alert("please enter a valid name, that starts with a capital letter");
  } else {
    const fullName = firstName + " " + lastName;
    const age = today.getFullYear() - dateInput.getFullYear();

    console.log(
      "my form ",
      "fullName : ",
      fullName,
      "age : ",
      age,
      "email : ",
      email,
      "phoneNumber : ",
      phoneNumber
    );
  }
});
