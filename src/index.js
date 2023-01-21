module.exports = function check(str, bracketsConfig) {
	let arr = [];
	for(let char of str){
		for(let i = 0; i < bracketsConfig.length; i++){
			if(arr[arr.length-1] == bracketsConfig[i][0] && char==bracketsConfig[i][1]){
				arr.pop();
			}
			else if (char == bracketsConfig[i][0]){
				arr.push(char);
			}
			else if(char == bracketsConfig[i][1]){
				return false;
			}
		}
	}
	return (!arr.length);
}
