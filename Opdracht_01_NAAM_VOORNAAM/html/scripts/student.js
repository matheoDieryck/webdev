/********** STUDENT.JS ***********
 * Created by: Matheo dieryck
 * Created at: 26/01/2024
 * Updated at: 27/01/2024
*********************************/

/***** Oefening 01 *****/
const form = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value
  };

  popupText.innerHTML = `Dag ${userData.firstName} ${userData.lastName}, er is een mail verzonden naar ${userData.email} ter bevestiging van uw inschrijving! Voornaam: ${userData.firstName} Naam: ${userData.lastName} E-mailadres: ${userData.email}`;
  popup.style.display = "block";

  setTimeout(function() {
    popup.style.display = "none";
  }, 2000);
});

/***** Oefening 02 *****/
const oef2code = document.getElementById('oef2-code');
const images = [
  {
    image: 'content/oef_02_01.jpg',
    title: 'Title01',
    content: 'Lorem ipsum dolor sit amet. Ab ipsum suscipit est facilis dolore sit veniam rerum ea accusantium dolores eos dolorem reiciendis. Ut nesciunt culpa qui rerum debitis et dicta distinctio vel veniam quis quo nisi consequatur id amet nemo. Et accusantium dolores et sapiente obcaecati id suscipit doloribus ut reiciendis earum aut facere modi.',
  },
  {
    image: 'content/oef_02_02.jpg',
    title: 'Title02',
    content: 'Lorem ipsum dolor sit amet. Ab ipsum suscipit est facilis dolore sit veniam rerum ea accusantium dolores eos dolorem reiciendis. Ut nesciunt culpa qui rerum debitis et dicta distinctio vel veniam quis quo nisi consequatur id amet nemo. Et accusantium dolores et sapiente obcaecati id suscipit doloribus ut reiciendis earum aut facere modi.',
  },
];

images.forEach((image) => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.display = "flex"; 
    
    const imageElement = document.createElement('img');
    imageElement.src = image.image;
    imageElement.style.maxWidth = "10%"
    imageElement.style.maxHeight = "10%"
    
    const InfoElement = document.createElement('div');
    InfoElement.style.marginLeft = "10px"; 
    
    const titleElement = document.createElement('h3');
    titleElement.textContent = image.title;
    
    const contentElement = document.createElement('p');
    contentElement.textContent = image.content;
    
    InfoElement.appendChild(titleElement);
    InfoElement.appendChild(contentElement);
    
    gridItem.appendChild(imageElement);
    gridItem.appendChild(InfoElement);
    
    oef2code.appendChild(gridItem);
  });