var projectItemsContainer = document.getElementsByClassName('project-container')[0];
var skillArea = document.getElementsByClassName('skill-area')[1];
var workData = myDb.workList
var skillData = myDb.skillList



window.addEventListener('load', ()=>{
    loadsKilldata()
    loadProjectData()
})

function loadsKilldata(){
    skillData.map(data =>{
        addSkillDataToTemplate(data)
    })
}


function addSkillDataToTemplate(data){
var dom = `<div class="skill id="${data.id}">
                        <h3>${data.skill_title}</h3><!--h3-->
                    </div>`
    skillArea.innerHTML += dom
}




function loadProjectData(){
    workData.map(data => {
        addTemplateDataToContainer(data)

    })
}




function addTemplateDataToContainer(data){

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

