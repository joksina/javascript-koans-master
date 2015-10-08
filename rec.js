//Intro to Recursion

//the code above will keep calling itself infinitely
//it eventually hits the callstack
function recursiveArrayLoop(array, index){
	debugger;
	if(index === array.length){
	return;
	}
	console.log(array[index]);
	recursiveArrayLoop(array, index+1);
}

recursiveArrayLoop([1,2,3,4,5], 0);

//debugger; helps you read your code in the chrome console

//understas d prob
//determnind the base case
//visualize using a tree diagram
//
function fibonacci(num){
	if(num === 0 || num === 1){
	return num;
	}else {

	return fibonacci(num - 1) + fibonacci(num - 2); 
	}
}
