let button = document.getElementById('myButton');

button.addEventListener("click", function() {
    CV();
});

function CV() {
    let getOriginalPage = document.getElementById('container');
    getOriginalPage.style.display = "none";
    
    let div = document.createElement('div');
    div.style.backgroundColor = "#333";
    div.style.height = "1200px";
    div.style.width = "auto";
    div.style.margin = "auto";
    div.id = "cvDIV";
    document.body.appendChild(div);

    let header = document.createElement('h3');
    header.innerText = "CV";
    header.style.color = "white";
    header.style.paddingLeft = "5%";
    header.style.paddingTop = "5%";
    header.style.fontFamily = "'Montserrat', sans-serif"
    header.style.fontSize = "45px";
    div.appendChild(header);

    let headerWork = document.createElement('h3');
    headerWork.innerText = "Working experience";
    headerWork.style.color = "white";
    headerWork.style.paddingLeft = "5%";
    headerWork.style.paddingTop = "5%";
    headerWork.style.fontFamily = "'Montserrat', sans-serif"
    headerWork.style.fontSize = "45px";
    div.appendChild(headerWork);

    let listElement = document.createElement('ol');
    listElement.id = "ol";
    div.appendChild(listElement);
    
    let listWork = [
        '2011-2018 Aditro Logistics  (Forklift driver, Teamleader, Business Support and Site Support)',
        '2018-2020 Reach Logistics  (Process development manager)',
        '2020-present Dream Logistics  (Internal and external support with mostly SQL and some C#)'
    ]
    
    
    for (var i = 0; i < listWork.length; i++) {
        let list = document.createElement('li');
        list.innerHTML = listWork[i];
        list.style.color = "white";
        list.style.paddingTop = "1%";
        list.style.paddingLeft = "5%";
        list.style.fontFamily = "'Montserrat', sans-serif";
        list.style.fontSize = "20px";
        listElement.appendChild(list);
        
}

let headerSchool = document.createElement('h3');
headerSchool.innerText = "School experience";
headerSchool.style.color = "white";
headerSchool.style.paddingLeft = "5%";
headerSchool.style.paddingTop = "5%";
headerSchool.style.fontFamily = "'Montserrat', sans-serif"
headerSchool.style.fontSize = "45px";
div.appendChild(headerSchool);

let olSchool = document.createElement('ol');
    olSchool.id = "ol";
    div.appendChild(olSchool);

let listSchool = [
    '2000-2007 Talavidskolan',
    '2007-2009 Junedalskolan',
    '2009-2011 JohnBauer gymnasiet (IT)',
    '2021-present .NET web developer Campus Värnamo'
]

for(var i = 0; i < listSchool.length; i++){
    let schoolList = document.createElement('li');
    schoolList.innerHTML = listSchool[i];
    schoolList.style.color = "white";
    schoolList.style.paddingTop = "1%";
    schoolList.style.paddingLeft = "5%";
    schoolList.style.fontFamily = "'Montserrat', sans-serif";
    schoolList.style.fontSize = "20px";
    olSchool.appendChild(schoolList);
}

let returnButton = document.createElement('button');
returnButton.type = "button";
returnButton.innerText = "Return";
returnButton.style.color = "white";
returnButton.id = "return";
returnButton.style.marginLeft = "5%";
returnButton.style.marginTop = "5%";
returnButton.style.backgroundColor = "#333";
returnButton.style.padding = "10px";
returnButton.style.border = "3px solid white"
div.appendChild(returnButton);

buttonReturn = document.getElementById('return');

buttonReturn.addEventListener("click", function(){
    let getCV = document.getElementById('cvDIV');
    let loadOriginalPage = document.getElementById('container');

    getCV.remove();
    loadOriginalPage.style.removeProperty("display");
    
});

};







