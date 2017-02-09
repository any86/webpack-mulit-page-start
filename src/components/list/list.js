import lodash from 'lodash'
// var lodash = require('lodash');
module.exports = function() {
    // 写list组件的js代码
    // console.log(lodash);

    function add(x, y) {
        alert(x + y);
    }
    
    add(...[1,2])

}
