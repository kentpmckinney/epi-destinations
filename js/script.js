// var Destination () {
//     this.location = "";
//     this.landmarks = [];
//     this.timeOfYear = "";
//     this.notes = "";
// }

// function Destination () {
//     this.location = "",
//     this.currentId = 0
// }

let destinations = [];

function Destination(location, landmark, timeOfYear, notes) {
    this.location = location,
    this.landmark = landmark,
    this.timeOfYear = timeOfYear,
    this.notes = notes,
    this.assignId = 0
}

Destination.prototype.assignId = function() {
    this.assignId += 1;
    return this.assignId;
}

$(document).ready(function(){

    $("#new-persons-destinations").submit(function(event){
        event.preventDefault();
        // console.log('hi')
        let newDestination = new Destination();
        newDestination.location = $("#new-location").val();
        newDestination.landmark = $("#new-landmark").val();
        newDestination.timeOfYear = $("#new-timeOfYear").val();
        destinations.push(newDestination);

        $("#show-persons-destinations").empty();
        
        for (let i = 0; i < destinations.length; i++) {
            let html = "<ul>";
            html += `<li>Location: ${destinations[i].location}</li>`;
            html += `<li>Landmark: ${destinations[i].landmark}</li>`;
            html += `<li>Time of Year: ${destinations[i].timeOfYear}</li>`;    
            html += "</ul><br>";
            $("#show-persons-destinations").append(html);
        }

        // $(".location-name").append(newDestination);
        

        // <p>Location: <span class="location-name"></span></p>
        // <p>Landmark: <span class="landmark-name"></span></p>
        // <p>timeOfYear: <span class="timeOfYear-name"></span></p>

        // console.log(destinations)
        $("#show-persons-destinations").show();

    })
    
});