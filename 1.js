// задание 1.
let arr = [1, 3, 5, 4, 8, 6, 9, 10, 7, 11, 15,0];
let even = 0;
let odd = 0;
let zero = 0;
function getAmount() {
 for(i = 0; i < arr.length; i++){
   if(arr[i] === 0){
     zero++;
  }else if (arr[i] % 2 === 0){
    even++;
  }else{
    odd++;
  };
};
  if(zero == 0 ){
    console.log(`Четные - ${even}`, `Нечетные - ${odd}`);
  }else {
    console.log(`Четные - ${even}`, `Нечетные - ${odd}`, `Ноль - ${zero}`);
  };
};
getAmount();