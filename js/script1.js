const linkGoods = document.querySelector("[href='#goods']");
const linkPortfolio = document.querySelector("[href='#portfolio']");
const linkProjects = document.querySelector("[href='#projects']");
const linkContacts = document.querySelector("[href='#contacts']");

const sectionGoods = document.getElementById("goods");
const sectionPortfolio = document.getElementById("portfolio");
const sectionProjects = document.getElementById("projects");
const sectionContacts = document.getElementById("contacts");

linkGoods.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0, sectionGoods.clientHeight);

});

linkPortfolio.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0, sectionGoods.clientHeight + sectionPortfolio.clientHeight);

});

linkProjects.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0, sectionGoods.clientHeight + sectionProjects.clientHeight + sectionPortfolio.clientHeight);

});

linkContacts.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0, 
        sectionGoods.clientHeight + sectionProjects.clientHeight + sectionPortfolio.clientHeight + sectionContacts.clientHeight);

});