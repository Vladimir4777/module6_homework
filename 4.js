//  Задание 4.
function outputsNumbers(from, to) {
    let current = from;
   
     let timerId = setInterval(function() {
       console.log(current);
       if (current == to) {
         clearInterval(timerId);
       };
       current++;
      }, 1000);
    };
    outputsNumbers(5,15);