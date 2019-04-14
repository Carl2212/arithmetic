/**
** isBalanced : 判断表达式中包含的三种类型括号是否正确闭合，{},[],()
**/

function isBalanced(str) {
    let array = str.split('')
                   .filter(function(v){
                       return /\{|\}|\[|\]|\(|\)/.test(v)
                   });
    if(array.length / 2 != 0) return false; 
    let queue = [];
    for(let i = 0 ;i< array.length;i++) {
        if(/\{|\[|\(/.test(array[i])) {
            queue.push(array[i]);
        }else{
            let res = queue[queue.length-1]+array[i];
           if(!(/\{\}|\[\]|\(\)/.test(res))){
                return false;
           }else{
                queue.pop();
           }
        }
    }
    return true;
}

