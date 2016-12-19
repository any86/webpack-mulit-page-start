module.exports = function() {
    // 写list组件的js代码
    var dom = document.getElementById('warp');
    // var v = dom.getBoundingClientRect();

    // // var v = window.pageYOffset;
    var v = dom.width;
    // var v = document.getElementById('b').getBoundingClientRect().top - document.getElementById('a').getBoundingClientRect().top
    console.log(v);
    // document.documentElement.onclick = function() {
    //     // var v = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    //     // var v = document.getElementById('warp').scrollTop
    //     var v = window.height;
    //     console.log(v);
    // }


    var _dom = {};

    /*quk qk
     * 移动滚动条
     */
    _dom.scrollLeft = _dom.scrollX = (x) => {

    }

    /*
     * 移动滚动条
     */
    _dom.scrollTop = (y) => {

    }

    /*
     * 获取元素距离
     * @public
     * @param  {object} 目标dom对象/ window
     * @param  {object} 目标dom对象/ window
     * @returns {object} 2个dom的x, y距离
     */
    _dom.getDistance = (el1, el2) => {

    }

    _dom.getWidth = () => {

    }

    _dom.setWidth = () => {

    }

    _dom.getHeight = () => {

    }

    _dom.setHeight = () => {

    }

    _dom.offset = () => {

    }

}
