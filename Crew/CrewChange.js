const crewTitle = document.getElementById("crew-title");
const crewName = document.getElementById("crew-name");
const crewBio = document.getElementById("crew-bio");
const crewImage = document.getElementById("crew-image");
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

let crewData = {};

fetch('crew.json')
    .then(response => response.json())
    .then(data => {
        crewData = data;
        initilizeButtons();
        // Extract all image URLs from the data
        let urls = crewData.crew.map(crew => crew.images.png && crew.images.webp);
        // Filter out null values (in case some technologies don't have an image)
        urls = urls.filter(Boolean);
        // Flatten the array
        urls = urls.flat();
        // Preload the images
        preloadImages(urls);
    })
    .catch(error => console.error('Error:', error));

function initilizeButtons() {
    crewData.crew.forEach((member, index) => {
        document.getElementById(index + 1).onclick = function () {
            changeCrewMember(
                member.images,
                member.role,
                member.name,
                member.bio,
                index + 1
            );
        };
    });
}

/**
 * Change the crew member being displayed on the page.
 * 
 * @param {Object} images - The images of the crew member.
 * @param {string} role - The role of the crew member.
 * @param {string} name - The name of the crew member.
 * @param {string} bio - The biography of the crew member.
 * @param {string} selectedButtonId - The id of the selected button.
 */
function changeCrewMember(images, role, name, bio, selectedButtonId) {
    // Deselect all buttons
    button1.setAttribute("aria-selected", false);
    button2.setAttribute("aria-selected", false);
    button3.setAttribute("aria-selected", false);
    button4.setAttribute("aria-selected", false);
    
    // Select the button associated with the selected crew member
    document.getElementById(selectedButtonId).setAttribute("aria-selected", true);

    // Apply the fade-out animation to the crew member elements
    crewImage.classList.add('fade-out');
    crewTitle.classList.add('fade-out');
    crewName.classList.add('fade-out');
    crewBio.classList.add('fade-out');

    // Update the crew member details after the fade-out animation has finished
    onanimationend = (event) => {
        crewImage.srcset = images.webp;
        crewImage.src = images.png;
        crewImage.alt = images.alt;
        crewTitle.innerText = role;
        crewName.innerText = name;
        crewBio.innerText = bio;

        // Apply the pop-in animation to the crew member elements
        crewImage.classList.replace('fade-out', 'pop-in');
        crewTitle.classList.replace('fade-out', 'pop-in');
        crewName.classList.replace('fade-out', 'pop-in');
        crewBio.classList.replace('fade-out', 'pop-in');
    };

    // After the pop-in animation has finished, remove the pop-in class
    setTimeout(() => {
        crewImage.classList.remove('pop-in');
        crewTitle.classList.remove('pop-in');
        crewName.classList.remove('pop-in');
        crewBio.classList.remove('pop-in');
    }, 400); 
}
