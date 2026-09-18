const infoContainer = document.getElementById("info");
const buttonsContainer = document.getElementById("buttons-container");
const name = document.getElementById("name");
const title = document.getElementById("title");
const aboutBtn = document.getElementById("aboutBtn");
const skillsBtn = document.getElementById("skillsBtn");
const projectsBtn = document.getElementById("projectsBtn");
const educationBtn = document.getElementById("educationBtn");
const contactBtn = document.getElementById("contactBtn");
const aboutContainer = document.getElementById("about-container");
const skillsContainer = document.getElementById("skills-container");
const projectsContainer = document.getElementById("projects-container");
const projectHeading = document.getElementById("projectHeading")
const projectBtns = document.getElementById("project-btns");
const backToProjectsBtn1 = document.getElementById("backToProjects1");
const backToProjectsBtn2 = document.getElementById("backToProjects2");
const backToProjectsBtn3 = document.getElementById("backToProjects3");
const backToProjectsBtn4 = document.getElementById("backToProjects4");
const backToProjectsBtn5 = document.getElementById("backToProjects5")
const projectPages = document.querySelectorAll(".project-pages");
const educationContainer = document.getElementById("education-container");
const contactContainer = document.getElementById("contact-container");

const aboutBackBtn = document.getElementById("aboutBackBtn");
const skillsBackBtn = document.getElementById("skillsBackBtn");
const projectBackBtn = document.getElementById("projectBackBtn");
const educationBackBtn = document.getElementById("educationBackBtn");
const contactBackBtn = document.getElementById("contactBackBtn");


aboutBtn.addEventListener("click", displayAbout);
aboutBackBtn.addEventListener("click", displayHome);
skillsBtn.addEventListener("click", displaySkills);
skillsBackBtn.addEventListener("click", displayHome);
projectsBtn.addEventListener("click", displayProjects);
projectBackBtn.addEventListener("click", displayHome);
educationBtn.addEventListener("click", displayEducation);
educationBackBtn.addEventListener("click", displayHome);
contactBtn.addEventListener("click", displayContact);
contactBackBtn.addEventListener("click", displayHome);


function displayAbout(){
    buttonsContainer.classList.add("hidden");
    aboutContainer.classList.remove("hidden");
}

function displayHome(){
    infoContainer.classList.remove("hidden")
    buttonsContainer.classList.remove("hidden");
    aboutContainer.classList.add("hidden");
    skillsContainer.classList.add("hidden");
    projectsContainer.classList.add("hidden");
    educationContainer.classList.add("hidden");
    contactContainer.classList.add("hidden");
}

function displaySkills(){
    buttonsContainer.classList.add("hidden");
    skillsContainer.classList.remove("hidden");
}

function displayProjects(){
    infoContainer.classList.add("hidden")
    buttonsContainer.classList.add("hidden");
    projectsContainer.classList.remove("hidden");

}

function displayProject(projectId){
    projectHeading.classList.add("hidden");
    
    projectPages.forEach(project => {
        project.classList.add("hidden");
    })
    document.getElementById(projectId).classList.remove("hidden");

    backToProjectsBtn1.addEventListener("click", () => {
        document.getElementById(projectId).classList.add("hidden");
        displayProjectPage();
    })
    backToProjectsBtn2.addEventListener("click", () => {
        document.getElementById(projectId).classList.add("hidden");
        displayProjectPage();  
    })
    backToProjectsBtn3.addEventListener("click", () => {
        document.getElementById(projectId).classList.add("hidden");
        displayProjectPage();
    }) 
    backToProjectsBtn4.addEventListener("click", () => {
        document.getElementById(projectId).classList.add("hidden");
        displayProjectPage();
    }) 
    backToProjectsBtn5.addEventListener("click", () => {
        document.getElementById(projectId).classList.add("hidden");
        displayProjectPage();
    }) 
}
function displayProjectPage(){
    projectsContainer.classList.remove("hidden");
    projectHeading.classList.remove("hidden");
    projectPages.forEach(project => {
    project.classList.remove("hidden");
    }) 
}

function displayEducation(){
    buttonsContainer.classList.add("hidden");
    educationContainer.classList.remove("hidden");
}

function displayContact(){
    buttonsContainer.classList.add("hidden");
    contactContainer.classList.remove("hidden");
}
// 