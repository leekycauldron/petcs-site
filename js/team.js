const teamData = [
    {name:"Bryson Lee-Kwen", title:"President", image:"bryson"},
    {name:"Michael Chen", title:"Vice President", image:"michael"},
    {name:"Mekaeel Malik", title:"Vice President", image:"mekaeel"},
    {name:"Martin Baldwin", title:"Developer", image:"martin"},
    {name:"Jeff Guo", title:"Beginner Class - Presenter", image:"jeff"},
    {name:"Thomas Jiang", title:"Intermediate Class - Presenter", image:"thomas"},
    {name:"Stephen Liu", title:"Beginner Class - Presenter", image:"stephen"},
    {name:"Yuvia Liu", title:"Beginner Class - Presenter", image:"yuvia"},
    {name:"Jonathan Lok", title:"Developer", image:"jonathan"},
    {name:"Evan Ma", title:"Developer", image:"evan"},
    {name:"Sana Pardiwala", title:"Beginner Class - Presenter", image:"sana"},
]

function createTeamMemberCards() {
    const teamContainer = document.getElementById('teamContainer');
    const templateCard = document.querySelector('.team-member-card');

    teamData.forEach((member) => {
        const clone = templateCard.cloneNode(true);
        const nameElement = clone.querySelector('h2');
        const titleElement = clone.querySelector('p');
        const imageElement = clone.querySelector('img');

        // Set name and title for the new card

        nameElement.textContent = member.name;
        titleElement.textContent = member.title;
        imageElement.src = "images/"+member.image+".png";

        // Make the cloned card visible and append it to the container
        clone.classList.remove('hidden');
        teamContainer.appendChild(clone);
    });
}

createTeamMemberCards()