// JS for Q43 (Date of Birth Field)
Qualtrics.SurveyEngine.addOnload( function() {
  var qid=this.questionId;
  var mo=document.getElementsByName('QR~'+qid+'#1~1')[0];
  var day=document.getElementsByName('QR~'+qid+'#2~1')[0];
  var yr=document.getElementsByName('QR~'+qid+'#3~1')[0];

  function adjustOptions()
  {
    day.options[29].disabled = 0;
    day.options[30].disabled = 0;
    day.options[31].disabled = 0;
    if( mo.selectedIndex == 2 || mo.selectedIndex == 4 || mo.selectedIndex == 6 || mo.selectedIndex == 9 || mo.selectedIndex == 11 ) {
      day.options[31].disabled = 1;
      if( day.selectedIndex == 31 ) {
        day.selectedIndex = 30;
      };
      if( mo.selectedIndex == 2 ) {
        day.options[30].disabled = 1;
        if( day.selectedIndex == 30 ) {
          day.selectedIndex = 29;
        }                      
        if( parseInt( yr.options[yr.selectedIndex].innerHTML, 10 ) % 4 != 0) {
          day.options[29].disabled = 1;
          if( day.selectedIndex == 29 ) {
            day.selectedIndex = 28;
          } 
        } else {
          day.options[29].disabled = 0;
        }      
      }
    }
  }

  yr.onchange = function(){ adjustOptions(); };
  mo.onchange = function(){ adjustOptions(); };
} );
