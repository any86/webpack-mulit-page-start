//定义模块的所变量
module.exports = function(){
	if(0 == CODE_ENV){
		// dev阶段定义数据
		// 自己定义的mock地址和数据
		return {a: 'xx.json'}
	} else {
		// build阶段定义数据
		// 一般都是服务器模版变量
		return {a: 2}
	}
}