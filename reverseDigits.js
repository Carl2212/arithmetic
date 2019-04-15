
/**
** Given a 32-bit signed integer, reverse digits of an integer.
Example 1:
  Input: 123
  Output: 321
Example 2:
  Input: -123
  Output: -321
Example 3:
  Input: 120
  Output: 21

 INT range: -2147483648到2147483647
 INT_MAX  2147483647
 INT_MIN -2147483648
**
**/
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