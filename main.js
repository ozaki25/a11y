const send = document.getElementById("send");
const name = document.getElementsByName("name")[0];
const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];
send.addEventListener("click", function(e) {
  e.preventDefault();
  const form = document.getElementById("form");
  const params = {
    name: name.value,
    email: email.value,
    password: password.value
  };
  alert(JSON.stringify(params));
  form.submit();
});
