
$(document).ready(function() {
// this pulls the SHT section data from a google sheet using Google's Sheets API and populates the table
  const tripJSON = $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/16fETxJUKElO-DvisVSISU-VrzB3OvKn1hwuee0MNCu8/values/sections?key=AIzaSyBSjlW94owmh8gXyXu_73WlU2wbNyetI0o&valueRenderOption=UNFORMATTED_VALUE")
    .done(function(){
      const response = tripJSON.responseJSON
      let section_data = '';
      for (x = 1; x < response.values.length;x++) {
        section_data += '<tr class="'+ response.values[x][0] + ' dataRow">';
        section_data += '<td>' + response.values[x][2] + '</td>';
        section_data += '<td style="cursor: pointer;" onclick="window.open(\'' + response.values[x][4] + '\')">' + response.values[x][1] + '   <i class="fas fa-arrow-circle-right"></i></td>';
        section_data += '<td>' + response.values[x][3] + '</td>';
        section_data += '<td>' + response.values[x][5] + '</td>';
        section_data += '</tr>';
      }
      $('#sections-table').append(section_data);
      const loaded = true;  //this ensures that the footer isn't loaded until after the table is constructed
      if (loaded) {
        $('.footer').removeClass('invisible');
      }
    });

  //this enables multiple filters to be used at once to dynamically display selected groupings of data
  $('.btn').click(function() {
    $('.dataRow').hide();
    const activate = $('#' + this.getAttribute('id'));
    activate.toggleClass('active');
    const display = $('.active');
    if (display.length === 0) {
      $('.dataRow').show();
    }
    else {
      for (x=0; x < display.length; x++) {
        const data = $(display[x].dataset.key);
        data.show();
      }
    }
  })
});
