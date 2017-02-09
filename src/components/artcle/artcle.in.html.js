//定义模块的所变量
module.exports = function() {
    if (0 == CODE_ENV) {
        //dev阶段, mock数据
        return {}
    } else {
        //build阶段, 上线数据
        return {}
    }
}