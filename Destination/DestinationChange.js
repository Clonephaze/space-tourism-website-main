const destinationImg = document.getElementById("destination-img");
const destinationTitle = document.getElementById("destination-title");
const destinationBio = document.getElementById("destination-bio");
const destinationDistance = document.getElementById("destination-distance");
const destinationTime = document.getElementById("destination-time");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");

function preloadImages(urls) {
    urls.forEach(url => {
        let img = new Image();
        img.src = url;
    });
}

let destinationData = {};

fetch('destination.json')
    .then(response => response.json())
    .then(data => {
        destinationData = data;
        initilizeButtons();
        // Extract all image URLs from the data
        let urls = destinationData.destinations.map(destination => destination.images.png && destination.images.web);
        // Filter out null values (in case some destinations don't have an image)
        urls = urls.filter(Boolean);
        // Flatten the array
        urls = urls.flat();
        // Preload the images
        preloadImages(urls);
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
    button1.setAttribute("disabled", true);
    button2.setAttribute("aria-selected", false);
    button2.setAttribute("disabled", true);
    button3.setAttribute("aria-selected", false);
    button3.setAttribute("disabled", true);
    button4.setAttribute("aria-selected", false);
    button4.setAttribute("disabled", true);

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
        destinationImg.classList.replace('fade-out', 'roll-in-left');
        destinationTitle.classList.replace('fade-out', 'pop-in');
        destinationBio.classList.replace('fade-out', 'pop-in');
        destinationDistance.classList.replace('fade-out', 'pop-in');
        destinationTime.classList.replace('fade-out', 'pop-in');
    };

    setTimeout(() => {
        
        destinationTitle.classList.remove('pop-in');
        destinationBio.classList.remove('pop-in');
        destinationDistance.classList.remove('pop-in');
        destinationTime.classList.remove('pop-in');
    }, 400);

    setTimeout(() => {
        onanimationend = (event) => {
            destinationImg.classList.remove('roll-in-left');

            // re-enable the buttons
            button1.removeAttribute("disabled");
            button2.removeAttribute("disabled");
            button3.removeAttribute("disabled");
            button4.removeAttribute("disabled");
        };
    }, 1200)


}