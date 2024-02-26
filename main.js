let plantArray = [];

let PlantObject = function (pName, plightRequirement, phumidityLevel, pwaterRequirement, position) {
    this.ID = Math.random().toString(16).slice(5);
    this.name = pName;
    this.light = plightRequirement;
    this.humidity = phumidityLevel;
    this.water =pwaterRequirement;
    this.position = position;
}
let waterOptions = {
    "onceAWeek": "Once or Twice a Week",
    "Daily": "Daily",
    "onceAMonth": "Once or Twice a Month"
};
let selectedType = "";




function addPlant() {
    var plantName = document.getElementById("plantName").value;
    var lightRequirement = document.getElementById("lightRequirement").value;
    var humidityLevel = document.getElementById("humidityLevel").value; 
    var waterRequirement = document.getElementById("select-type").value;

    plantArray.push(new PlantObject(plantName, lightRequirement, humidityLevel, waterRequirement, plantArray.length));
    createPlantList(); // Refresh the plant list after adding a new plant
}
//Runs when DOM is loaded
document.addEventListener("DOMContentLoaded", function (event) {
    createPlantList();

    document.getElementById("select-type").addEventListener("change", function () {
        updateSelectedType();
        createPlantList();

    });
    //plant page
    document.getElementById("addPlant").addEventListener("click", function () {
        plantArray.push( new PlantObject(document.getElementById("plantName").value, document.getElementById("lightRequirement").value, document.getElementById("humidityLevel").value, selectedType));
        
        console.log(plantArray); //Print updates plantArray

        document.getElementById("plantName").value = "";
        document.getElementById("lightRequirement").value = "";
        document.getElementById("humidityLevel").value = "";

        createPlantList();
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        updateSelectedType();
    });
});
function updateSelectedType() {
    selectedType = document.getElementById("select-type").value;
}

//Function definitions
function createPlantList() {
    // clear prior data
    var myul = document.getElementById("myul");
    myul.innerHTML = "";

    plantArray.forEach(function (element) {   // use handy array forEach method
        var li = document.createElement('li');     
        var a = document.createElement('a');
        
        a.innerHTML = " <strong>Plant Name:</strong>  "+element.name;
        a.href = "#detailPage";

        a.addEventListener("click",function (){
            navigateToDetailPage(element);
        })
        li.appendChild(a);
        myul.appendChild(li);
   
        
    });
};

function navigateToDetailPage(plant) {
    // Get the element of the detail information page
    var detailPage = document.getElementById("detailPage");

    // Set the content of the detail information page
    detailPage.querySelector(".plant-name").innerText = "Plant Name: " + plant.name;
    detailPage.querySelector(".light-requirement").innerText = "Light Requirement: " + plant.light;
    detailPage.querySelector(".humidity-level").innerText = "Humidity Level: " + plant.humidity;
    detailPage.querySelector(".water-requirement").innerText = "Water Requirement: " + waterOptions[plant.water];
    

}



