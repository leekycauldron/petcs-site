const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const teamData = [
    {name:"Bryson Lee-Kwen", title:"President"},
    {name:"Michael Chen", title:"Vice President"},
    {name:"Mekaeel Malik", title:"Vice President"},
    {name:"Martin Baldwin", title:"Developer"},
    {name:"Jeff Guo", title:"Beginner Class - Presenter"},
    {name:"Thomas Jiang", title:"Intermediate Class - Presenter"},
    {name:"Stephen Liu", title:"Beginner Class - Presenter"},
    {name:"Yuvia Liu", title:"Beginner Class - Presenter"},
    {name:"Jonathan Lok", title:"Developer"},
    {name:"Evan Ma", title:"Developer"},
    {name:"Sana Pardiwala", title:"Beginner Class - Presenter"},
    {name:"Dorsa Rohani", title:"Developer"},
]

function createTeamMemberCards() {
    const teamContainer = document.getElementById('teamContainer');
    const templateCard = document.querySelector('.team-member-card');

    teamData.forEach((member) => {
        const clone = templateCard.cloneNode(true);
        const nameElement = clone.querySelector('h2');
        const titleElement = clone.querySelector('p');

        // Set name and title for the new card
        nameElement.textContent = member.name;
        titleElement.textContent = member.title;

        // Make the cloned card visible and append it to the container
        clone.classList.remove('hidden');
        teamContainer.appendChild(clone);
    });
}

createTeamMemberCards();

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    menu.classList.toggle("active");
});

