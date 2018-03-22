/**
 * two sum : 给定一个整数数组，其中有两项之和为一个特定的数字，假设每次 input 
 * 只有一个唯一解，不允许两次使用同一个元素，返回这两个数的索引。
 *
**/

let twosum = (array , target)=>{
	let map = {};
	for(let i = 0 ; i < array.length ; i++){
		let num = target - array[i];
		if(map[num] != undefined) {
			return [map[num] , i];
		}
		map[array[i]] = i;
	}
}