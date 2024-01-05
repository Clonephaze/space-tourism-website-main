const crewTitle = document.getElementById("crew-title");
const crewName = document.getElementById("crew-name");
const crewBio = document.getElementById("crew-bio");
const crewImage = document.getElementById("crew-image");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");

function changeToDouglas() {
    crewImage.src = "images/image-douglas-hurley.webp"
    crewTitle.innerHTML = "Commander";
    crewName.innerHTML = "Douglas Hurley";
    crewBio.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."

    button1.setAttribute("aria-selected", "true");
    button2.setAttribute("aria-selected", "false");
    button3.setAttribute("aria-selected", "false");
    button4.setAttribute("aria-selected", "false");
}

function changeToMark() {
    crewImage.src = "images/image-mark-shuttleworth.webp"
    crewTitle.innerHTML = "Mission Specialist";
    crewName.innerHTML = "Mark Shuttleworth";
    crewBio.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."

    button1.setAttribute("aria-selected", "false");
    button2.setAttribute("aria-selected", "true");
    button3.setAttribute("aria-selected", "false");
    button4.setAttribute("aria-selected", "false");
}

function changeToVictor() {
    crewImage.src = "images/image-victor-glover.webp"
    crewTitle.innerHTML = "Pilot";
    crewName.innerHTML = "Victor Glover";
    crewBio.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the    International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer."

    button1.setAttribute("aria-selected", "false");
    button2.setAttribute("aria-selected", "false");
    button3.setAttribute("aria-selected", "true");
    button4.setAttribute("aria-selected", "false");
}

function changeToAnousheh() {
    crewImage.src = "images/image-anousheh-ansari.webp"
    crewTitle.innerHTML = "Engineer";
    crewName.innerHTML = "Anousheh Ansari";
    crewBio.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."

    button1.setAttribute("aria-selected", "false");
    button2.setAttribute("aria-selected", "false");
    button3.setAttribute("aria-selected", "false");
    button4.setAttribute("aria-selected", "true");
}