// upload restriction

$(document).ready(
  function(){
      $('input:file').change(
          function(){
              if ($(this).val()) {
                  $('input:submit').attr('disabled',false); 
              } 
          }
          );
  });



var z = 0;
        function move() {
          if (z == 0) {
            z =1;
            var elem = document.getElementById("myBar");
            var width = 5;
            var id = setInterval(frame, 40);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                z = 0;
              } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
              }
            }
          }
        }

        var $progress = $('.progress');
        var $progressBar = $('.progress-bar');
        var $alert = $('.alert');
        
        setTimeout(function() {
            $progressBar.css('width', '10%');
            setTimeout(function() {
                $progressBar.css('width', '30%');
                setTimeout(function() {
                    $progressBar.css('width', '100%');
                    setTimeout(function() {
                        $progress.css('display', 'none');
                        $alert.css('display', 'block');
                    }, 500); // WAIT 5 milliseconds
                }, 2000); // WAIT 2 seconds
            }, 1000); // WAIT 1 seconds
        }, 1000); // WAIT 1 second



const month = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("month").innerHTML = months[month.getMonth()];

const date = new Date();
document.getElementById("date").innerHTML = date.getDate();

const year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();

// LIVE TIME
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

const day = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = days[day.getDay()];


var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();


