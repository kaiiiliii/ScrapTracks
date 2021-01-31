// Javascript function getResult(): Grabs the log of entries from database to view
function getResult() {
  // Uses AJAX to connect to the backend server
  $.ajax({
    // Python Flask url
    url: "/view",
    success: function(result) {
      console.log("received result: " + result);

      // For each item in the list that is returned in the Python function, we add the equivalent table HTML string
      // For each loop that applies the given function to each item in the list

      $.each(JSON.parse(result), function(index, item){
        // Appending HTML
        // TO-DO : CHANGE ATTRIBUTE NAMES
        $('#result_table').append('<tr><td>' + item.compost + '</td><td>' + item.recycle + '</td><td>' + item.other + '</td><td>' + item.date + '</td></tr>');
      });
    }
  });
}


var field = document.querySelector('#date');
var date = new Date();
// Set the date
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);
