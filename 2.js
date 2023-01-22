// Задание 2.
function isPrime(num){
    if(!Number.isInteger(num) || num < 2 || num > 1000) {
     return "Данные неверны";
    };
    let k = Math.sqrt(num);
    for(let i = 2; i <= k; i++){
      if(num % i === 0){
        return "Непростое число";
      };
    };
    return "Простое число";
  };
  
  console.log(isPrime(100))