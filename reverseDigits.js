

function reverseDigits(num) {
	let rev = 0;
	while(num > 0){
	   let n = num % 10;
	   num = Math.floor(num / 10);
	   if(rev > INT_MAX / 10 || (rev == INT_MAX / 10 && n > 7)) {
	   	return 0;
	   }
	   if(rev < INT_MIN / 10 || (rev == INT_MIN / 10 && n < -8)) {
	   	return 0;
	   }
	   rev = rev * 10 + n;
	}
	return rev;
}