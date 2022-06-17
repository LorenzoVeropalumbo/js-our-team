// Creazioni del arrey con il team
const teamArrey = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name:'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name:'Angela Lopez',
    role: 'Social Media Menager',
    image: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name:'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg',
  },
  {
    name:'Walter Gordon',
    role: 'Office Managere',
    image: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name:'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg',
  },
];

// mi salvo il container per inserirgli le card
const teamContainer = document.querySelector(".team-container");
console.log(teamContainer);

// Scorro l'arrey per ogni singola classe
for(let i = 0; i < teamArrey.length; i++) { 
  
  // Mi salvo ogni singola classe in una variabile
  const thisTeamMember = teamArrey[i];

  // creo l' innerHTML per metterlo nel documento
  const  cardTeamMember = ` 
  <!-- Inseriamo inizialmente una card statica per stilarla e vedere l'effetto finale -->
    <div class="team-card">
      <div class="card-image">
        <img src=${thisTeamMember.image} alt="${thisTeamMember.name}">
      </div>
      <div class="card-text">
        <h3>${thisTeamMember.name}</h3>
        <p>${thisTeamMember.role}</p>
      </div>
    </div>
  `;

  // lo inserisco nel documento 
  teamContainer.innerHTML += cardTeamMember;

}