module.exports = function() {
    // 写a组件的js代码
    require('../../../static/jquery_lazyload-master/jquery.lazyload.js');
    $("img.lazy").lazyload({
        effect: 'fadeIn'
    });
}
