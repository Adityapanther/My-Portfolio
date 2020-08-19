var projectItemsContainer = document.getElementsByClassName('project-container')[0];
var workData = myDb.workList
var skillData = myDb.skillList



window.addEventListener('load', ()=>{
    loadProjectData()
})


function loadProjectData(){
    workData.map(data => {
        addDataToProjectContainer(data)

    })
}

console.log(window.location.pathname+ "img");


function addDataToProjectContainer(data){

    var dom = `<div class="project-item" id="${data.id}">
    <a href="${data.webUrl}">
        <div class="porject-item-img">
            <img src="${data.siteThumbnails}"
             alt="${data.siteTitle}" />
        </div>
        <div class="project-item-title">
            <h1>${data.siteTitle}</h1>
        </div>
        </a>
        </div>`;

    projectItemsContainer.innerHTML += dom;

}

