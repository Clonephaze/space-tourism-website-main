const destinationImg = document.getElementById("destination-img");
const destinationTitle = document.getElementById("destination-title");
const destinationBio = document.getElementById("destination-bio");
const destinationDistance = document.getElementById("destination-distance");
const destinationTime = document.getElementById("destination-time");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");

let destinationData = {};

fetch('destination.json')
    .then(response => response.json())
    .then(data => {
        destinationData = data;
        initilizeButtons();
    })
    .catch(error => console.error('Error:', error));

function initilizeButtons() {
    destinationData.destinations.forEach((location, index) => {
        document.getElementById(index + 1).onclick = function () {
            changeDestinationlocation(
                location.images,
                location.name,
                location.description,
                location.distance,
                location.travel,
                index + 1
            );
        };
    });
}

function changeDestinationlocation(images, name, description, distance, travel, selectedButtonId) {
    // Deselect all buttons
    button1.setAttribute("aria-selected", false);
    button2.setAttribute("aria-selected", false);
    button3.setAttribute("aria-selected", false);
    button4.setAttribute("aria-selected", false);

    // Select the button associated with the selected destination
    document.getElementById(selectedButtonId).setAttribute("aria-selected", true);

    // Apply the fade-out animation to the destination elements
    destinationImg.classList.add('fade-out');
    destinationTitle.classList.add('fade-out');
    destinationBio.classList.add('fade-out');
    destinationDistance.classList.add('fade-out');
    destinationTime.classList.add('fade-out');

    // Update the destination details after the fade-out animation has finished
    onanimationend = (event) => {
        destinationImg.srcset = images.webp;
        destinationImg.src = images.png;
        destinationImg.alt = images.alt;
        destinationTitle.innerText = name;
        destinationBio.innerText = description;
        destinationDistance.innerText = distance;
        destinationTime.innerText = travel;

        // Apply the pop-in animation to the destination elements
        destinationImg.classList.remove('fade-out');
        destinationImg.classList.add('pop-in');
        destinationTitle.classList.remove('fade-out');
        destinationTitle.classList.add('pop-in');
        destinationBio.classList.remove('fade-out');
        destinationBio.classList.add('pop-in');
        destinationDistance.classList.remove('fade-out');
        destinationDistance.classList.add('pop-in');
        destinationTime.classList.remove('fade-out');
        destinationTime.classList.add('pop-in');
    };

    setTimeout(() => {
        destinationImg.classList.remove('pop-in');
        destinationTitle.classList.remove('pop-in');
        destinationBio.classList.remove('pop-in');
        destinationDistance.classList.remove('pop-in');
        destinationTime.classList.remove('pop-in');
    }, 400);
}