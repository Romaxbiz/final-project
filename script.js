function myFunction() {
  var textElement = document.getElementById('text');
    
  if (textElement.style.display === "none" ||     textElement.style.display === "") {
          textElement.style.display = "block";
        } else {
          textElement.style.display = "none";
        }
  }
