
const linkUs = document.querySelector("[href='#us']");
const linkOrder = document.querySelector("[href='#order']");
const linkProjects = document.querySelector("[href='#projects']");
const linkNetworks = document.querySelector("[href='#networks']");

const sectionHead = document.getElementById("head");
const sectionUs = document.getElementById("us");
const sectionOrder = document.getElementById("order");
const sectionProjects = document.getElementById("projects");
const sectionNetworks = document.getElementById("networks");

linkUs.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0, sectionHead.offsetHeight);

});

linkOrder.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0, sectionHead.offsetHeight + sectionUs.offsetHeight);

});

linkProjects.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0, sectionHead.offsetHeight + sectionUs.offsetHeight + sectionOrder.offsetHeight);

});

linkNetworks.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scrollTo(0, 
        sectionHead.offsetHeight + sectionUs.offsetHeight + sectionOrder.offsetHeight + sectionProjects.offsetHeight);

});