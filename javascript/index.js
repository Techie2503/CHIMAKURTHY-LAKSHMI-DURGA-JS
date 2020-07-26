window.addEventListener("load", () => {
  document.getElementById("loginButton").addEventListener("click", (e) => {
    e.preventDefault();
    let mail = document.getElementById("inputEmail").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      alert("You have entered an valid email");
    }
    alert("You have entered an invalid email address!");
  });
});
