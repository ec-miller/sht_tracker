
$(document).ready(function() {
// this pulls the SHT section data from a google sheet using Google's Sheets API and populates the table
  const tripJSON = $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/16fETxJUKElO-DvisVSISU-VrzB3OvKn1hwuee0MNCu8/values/sections?key=AIzaSyBSjlW94owmh8gXyXu_73WlU2wbNyetI0o&valueRenderOption=UNFORMATTED_VALUE&callback=?")
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

      updateTotalMiles();
      updatePercentageComplete(ericSections);
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
    // if buttons have active class, since a nodelist is like an array
    else {
      for (x=0; x < display.length; x++) {
        const data = $(display[x].dataset.key);
        data.show();
      }
    }

    updateTotalMiles();
  })

  const ericSections = [32,36,37,38,39,45,46,47,48,49,34,35];
  console.log(ericSections.length);


  /**
   * function that selects the visible data rows and calculates the
   * their miles to output in the summaryStats
   * @return {number} a number value of the miles added up for visible rows
   */
  function updateTotalMiles() {

    const $visibleRows = $('.dataRow:visible');

    // debugging
    // console.log(`visible rows: ${$visibleRows.length}.`);

    if ($visibleRows.length === 0) {
      $('#totalMiles').text(0);
    } else {
      let totalMiles = 0;

      $visibleRows.each(function() {
        let miles = $(this).find('td:last-child').text();
        miles = Number(miles);
        console.log(Number(miles));
        totalMiles += miles;
      });
      $('#totalMiles').text(totalMiles.toFixed(1));
    }
  }
});


function updatePercentageComplete(completionArray) {
  const currentPercentage = (completionArray.length / 50) * 100;
  $('#percentageComplete').text(currentPercentage + '%');
}
