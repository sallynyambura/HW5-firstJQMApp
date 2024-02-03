let teaArray = [];
let plantArray = [];

let Tea = function (tName, tType) {
    this.name = tName;
    this.type = tType;
}

let Plant = function (pName, pColor) {
    this.name = pName;
    this.color = pColor;
}

document.addEventListener("DOMContentLoaded", function (event) {

    createTeaList();
    createPlantList();


    //tea page
    document.getElementById("addTea").addEventListener("click", function () {
        teaArray.push ( new Tea(document.getElementById("teaName").value, 
        document.getElementById("teaType").value ) );
        
        document.getElementById("teaName").value = "";
        document.getElementById("teaType").value = "";

        createTeaList();
    });

    //plant page
    document.getElementById("addPlant").addEventListener("click", function () {
        plantArray.push ( new Plant(document.getElementById("plantName").value, 
        document.getElementById("plantColor").value ) );
        
        document.getElementById("plantName").value = "";
        document.getElementById("plantColor").value = "";

        createPlantList();
    });
});

function createTeaList() {
    // clear prior data
    var teaUl = document.getElementById("teaDisplay");
    teaUl.innerHTML = "";

    teaArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
          // added data-role="listview" to the ul in the html
        li.innerHTML = "Name: " + element.name + " Type: " + element.type;
        teaUl.appendChild(li);
    });
};

function createPlantList() {
    // clear prior data
    var plantUl = document.getElementById("plantDisplay");
    plantUl.innerHTML = "";

    plantArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
          // added data-role="listview" to the ul in the html
        li.innerHTML = "Name: "+element.name + "  Color: " + element.color;
        plantUl.appendChild(li);
    });
};
