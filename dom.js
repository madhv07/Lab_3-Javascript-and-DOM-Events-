const heading = document.getElementById("main-heading");
const image = document.getElementById("Image");
const parentDiv = document.getElementsByClassName("parent")[0];

// Change heading text and styles
document.getElementById("change-text-btn").addEventListener("click", function() {
    heading.innerHTML = "I am from Rajasthan";
    heading.style.color = "blue";
    heading.style.top = "20px";
    heading.style.position = "relative";
});

// Change image source
document.getElementById("change-img-btn").addEventListener("click", function() {
    image.src = "harry.jpeg";
});

// Add text node
document.getElementById("add-text-node").addEventListener("click", function() {
    let newTextNode = document.createTextNode("Hello, welcome to DOM manipulation!");
    parentDiv.appendChild(newTextNode);
});

// Delete last child node
document.getElementById("delete-node").addEventListener("click", function() {
    let lastNode = parentDiv.lastChild;
    if (lastNode) {
        parentDiv.removeChild(lastNode);
    } else {
        alert("No more nodes to delete!");
    }
});

// jQuery: Change button text
$('#change-btn-text').click(function() {
    $(this).text('Button Text Changed (jQuery)');
});
