function submitLogin() {
    sessionStorage.setItem("inputUsername", document.getElementById("inputUsername").value);
   
   
   
    let personName = sessionStorage.getItem("inputUsername");
    alert(`The form was submitted ${personName}`);

    window.location.href = `index.html?${personName}`;
  }