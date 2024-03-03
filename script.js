function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = new Map();
	for(let ch of str){
		charCount.set(ch,(charCount.get(ch) || 0) + 1);
	}
	for (let ch of str) {
		if(charCount.get(ch) === 1){
			return ch;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
