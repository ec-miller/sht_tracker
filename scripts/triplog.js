
$(document).ready(function() {
// this pulls the SHT section data from a google sheet using Google's Sheets API and populates the table
  const tripJSON = $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/16fETxJUKElO-DvisVSISU-VrzB3OvKn1hwuee0MNCu8/values/erictriplog?key=AIzaSyBSjlW94owmh8gXyXu_73WlU2wbNyetI0o&valueRenderOption=UNFORMATTED_VALUE&callback=?")
    .done(function(){
      const response = tripJSON.responseJSON
      let trips = '';
      for (x = 1; x < response.values.length;x++) {
        trips += '<tr>';
        trips += '<td>' + response.values[x][0] + '</td>';
        trips += '<td>' + response.values[x][1] + '</td>';
        trips += '<td>' + response.values[x][6] + '</td>';
        trips += '<td>' + response.values[x][7] + '</td>';
        trips += '<td>' + response.values[x][8] + '</td>';
        trips += '<td>' + response.values[x][9] + '</td>';
        trips += '</tr>';
      }
      $('#trips-table').append(trips);
      const loaded = true;  //this ensures that the footer isn't loaded until after the table is constructed
      if (loaded) {
        $('.footer').removeClass('invisible');
      }
    })
});
