const imgLand = document.getElementById("tech-img-land");
const imgPort = document.getElementById("tech-img-port");
const imgCont = document.getElementById("tech-img");
const techTitle = document.getElementById("tech-title");
const techArticle = document.getElementById("tech-article");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");

let techData = {};

fetch('technology.json')
    .then(response => response.json())
    .then(data => {
        techData = data;
        initilizeButtons();
    })
    .catch(error => console.error('Error:', error));

function initilizeButtons() {
    techData.technology.forEach((tech, index) => {
        document.getElementById(index + 1).onclick = function () {
            changeTechInfo(
                tech.name,
                tech.images,
                tech.description,
                index + 1
            );
        };
    });
}

function changeTechInfo(name, images, description, selectedButtonId) {
    // Deselect all buttons
    button1.setAttribute("aria-selected", false);
    button2.setAttribute("aria-selected", false);
    button3.setAttribute("aria-selected", false);

    // Select the button associated with the selected technology
    document.getElementById(selectedButtonId).setAttribute("aria-selected", true);

    // Apply the fade-out animation to the technology elements
    imgCont.classList.add('fade-out');
    techTitle.classList.add('fade-out');
    techArticle.classList.add('fade-out');

    // Update the technology details after the fade-out animation has finished
    onanimationend = (event) => {
        imgLand.src = images.landscape;
        imgLand.srcset = images.landscape;
        imgPort.src = images.portrait;
        imgPort.alt = images.alt;
        techTitle.innerText = name;
        techArticle.innerText = description;

        // Apply the pop-in animation to the technology elements
        imgCont.classList.remove('fade-out');
        imgCont.classList.add('pop-in');
        techTitle.classList.remove('fade-out');
        techTitle.classList.add('pop-in');
        techArticle.classList.remove('fade-out');
        techArticle.classList.add('pop-in');
    };

    setTimeout(() => {
        imgCont.classList.remove('pop-in');
        techTitle.classList.remove('pop-in');
        techArticle.classList.remove('pop-in');
    }, 400);
}