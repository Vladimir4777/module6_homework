// Задание 3.
function getSum(a) {
    return function(b) {
        return a + b;
    }; 
 };
 console.log(getSum(9)(5));