function addManga() {
    // Get input value (manga title)
    var mangaTitle = document.getElementById("mangaInput").value;

    // Clear input field after getting value
    document.getElementById("mangaInput").value = "";

    // Create a new list item element
    var li = document.createElement("li");

    // Create text node with manga title
    var textNode = document.createTextNode(mangaTitle);

    // Append the text node to the list item
    li.appendChild(textNode);

    // Append the list item to the mangaList (unordered list)
    document.getElementById("mangaList").appendChild(li);
}
