// Function to add item to library
function addToLibrary() {
    document.getElementById('status').textContent = 'Item added to library';
    document.getElementById('addBtn').style.display = 'none';
    document.getElementById('removeBtn').style.display = 'inline-block';
}

// Function to remove item from library
function removeFromLibrary() {
    document.getElementById('status').textContent = 'Item removed from library';
    document.getElementById('addBtn').style.display = 'inline-block';
    document.getElementById('removeBtn').style.display = 'none';
}
