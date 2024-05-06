document.getElementById("imageInput").addEventListener("change", function() {
  var file = this.files[0];
  var imagePreview = document.getElementById("imagePreview");

  // Clear previous preview
  imagePreview.innerHTML = "";

  if (file) {
    var reader = new FileReader();

    reader.onload = function(event) {
      var imageUrl = event.target.result;
      var imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageElement.style.maxWidth = "100%";
      imageElement.style.maxHeight = "300px"; // Adjust as needed
      imagePreview.appendChild(imageElement);
    };

    reader.readAsDataURL(file);
  }
});
