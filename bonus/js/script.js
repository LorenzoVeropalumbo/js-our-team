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

createMemberTeam(teamArrey);

// prendo gli input che l'utente inserisce
const LoadMemberTeam = document.getElementById("addMemberButton");
LoadMemberTeam.addEventListener('click', addMemberTeam);

function addMemberTeam(){

  // salvo gli elementi in una variabile
  const memberTeamName = document.getElementById("name").value;
  const memberTeamRole = document.getElementById("role").value;
  const memberTeamImg = document.getElementById("image").value;
  
  // resetto il form
  document.getElementById("name").value ="";
  document.getElementById("role").value ="";
  document.getElementById("image").value ="";
  
  // crezione elemento da pushare nell'arrey
  const newTeamMember = {
    name: memberTeamName,
    role: memberTeamRole,
    image: memberTeamImg,
  };

  teamArrey.push(newTeamMember);

  drowMemberTeam(newTeamMember);
};

// -----------------------------------
//           FUNCTION
// -----------------------------------
function createMemberTeam(teamArrey){
  // Scorro l'arrey per ogni singola classe
  for(let i = 0; i < teamArrey.length; i++) { 
    
    // Mi salvo ogni singola classe in una variabile
    const thisTeamMember = teamArrey[i];
    
    drowMemberTeam(thisTeamMember);
  }
}

function drowMemberTeam(TeamMember){
  // creo l' innerHTML per metterlo nel documento
  const  cardTeamMember =
  `
    <div class="team-card">
      <div class="card-image">
        <img src=${TeamMember.image} alt="${TeamMember.name}">
      </div>
      <div class="card-text">
        <h3>${TeamMember.name}</h3>
        <p>${TeamMember.role}</p>
      </div>
    </div>
  `;

  // lo inserisco nel documento 
  teamContainer.innerHTML += cardTeamMember;
}