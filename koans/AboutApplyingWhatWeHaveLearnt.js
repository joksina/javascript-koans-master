var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(0);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = 233168;    /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(undefined);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
    
    function prime(num){
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      num = num / i;
    }

  }
return i
}

function find_highest_prime_factor(n) {
  var max = Math.round(Math.sqrt(n));
  for(var i = max; i >= 2; i--) {
    if(n % i == 0 && find_highest_prime_factor(i) == 1) {
      return i;
    }
  }
  return 1;
}

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

    function isPal(str){
  str = str.toString();
  return str === str.split("").reverse().join("")
}
function longPali(start, end){
  var max = 0;
  for(var i = start; i < end; i++){
    for(var y = start; y < end; y++){
      var mult = i * y;
      if(isPal(mult) && mult> max){
        max = mult;
      }
    }
  }
  return max;
}

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    var foundIt = false;
var test = 10;
var result;
while (foundIt === false) {
  var isEvenlyDivisible = true;
  for (var x = 1 ; x < 21 ; x++) {
    if (test % x !== 0) {
      isEvenlyDivisible = false;
      break;
    }
  }
  if (isEvenlyDivisible) {
    foundIt = true;
    result = test;
    break;
  }
  
  test++;
}


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

    var sumOfSquares = 0;
var squareOfSums = 0;

for (var x = 1 ; x < 101 ; x++) {
  sumOfSquares += x * x;
  squareOfSums += x;
}

squareOfSums *= squareOfSums;

  });

  it("should find the 10001st prime", function () {

  });
  */
});
