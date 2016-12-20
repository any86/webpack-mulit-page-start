module.exports = function() {
    var _qk = _where = {};

    /*
     * 移动滚动条
     * @public
     * @param {object} 目标元素/window
     * @param {number} 滚动距离
     */
    _qk.setSL = _qk.scrollLeft = (obj, x) => {
        window.scrollTo(x, 0);
    }

    /*
     * 移动滚动条
     */
    _qk.setST = _qk.scrollTop = (obj, y) => {
        window.scrollTo(0, y);
    }

    _qk.onscroll2 = () => {

    }

    _qk.onresize2 = () => {

    }



    /*
     * 获取元素距离, 基于元素的外轮廓左上顶点计算(外轮廓包括border/padding/margin)
     * @public
     * @param  {object} 目标dom对象
     * @param  {object} 目标dom对象
     * @returns {object} 2个dom的坐上顶点间的x, y距离
     */
    _qk.getD = _qk.getDistance = (dom1, dom2) => {
        var rect1 = dom1.getBoundingClientRect();
        if(undefined === dom2) {
            var rect2 = {top: 0, left: 0};
        } else {
            var rect2 = dom2.getBoundingClientRect();
        }
        return {
            x: rect1.left - rect2.left,
            y: rect1.top - rect2.top
        };
    };

    /*
     * 获取元素外轮廓宽度(外轮廓包括border/padding/margin)
     * @public
     * @param  {object} dom/window
     * @returns {number} 元素外轮廓宽度
     */
    _qk.getW = _qk.getWidth = (obj) => {
        if(undefined == obj || obj.window === window) {
            return window.innerWidth;
        } else {
            return obj.getBoundingClientRect().width;
        }
        
    };

    /*
     * 获取元素外轮廓高度(外轮廓包括border/padding/margin)
     * @public
     * @param  {object} dom/window
     * @returns {number} 元素外轮廓高度
     */
    _qk.getH = _qk.getHeight = (obj) => {
        if(undefined == obj || obj.window === window) {
            return window.innerHeight;
        } else {
            return obj.getBoundingClientRect().height;
        }
    }

    /*
     * 获取元素距离浏览器顶部的距离
     * @public
     * @param  {object} 目标dom对象
     * @returns {number} 元素外轮廓高度
     */
    _qk.getT = _qk.getTop = (dom) => {
        return dom.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop;
    }

    /*
     * 获取元素距离浏览器左侧的距离
     * @public
     * @param  {object} 目标dom对象
     * @returns {number} 元素外轮廓高度
     */
    _qk.getL = _qk.getLeft = (dom) => {
        return dom.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft;
    }

    /*
     * 缩短getBoundingClientRect
     * @public
     * @param  {object} 目标dom对象
     * @returns {object} 元素轮廓描述
     */    
    _qk.getBCR = (dom) => {
        return dom.getBoundingClientRect();
    }

    /*
     * 获取目标滚动条的高度
     * @public
     * @param  {object} dom/window
     * @returns {number} 目标的滚动条高度
     */   
    _qk.getST = _qk.getScrollTop = (obj) => {
        if(obj.window === window) {
            return obj.pageYOffset;
        } else {
            return dom.scrollTop;
        }
    }

    /*
     * 获取目标滚动条的左侧长度
     * @public
     * @param  {object} dom/window
     * @returns {number} 目标滚动条的左侧长度
     */   
    _qk.getSL = _qk.getScrollLeft = (obj) => {
        if(obj.window === window) {
            return obj.pageXOffset;
        } else {
            return obj.scrollLeft;
        }        
    }


    // 写list组件的js代码
    var dom = document.getElementById('warp');
    var dom1 = document.getElementById('a');
    var dom2 = document.getElementById('c');
    var fix = document.getElementById('fix');

    setTimeout(() => {
        // window.scrollTo(85, 200);
        // dom.scrollTop = 30;
        // dom.scrollLeft = 60;
        var v = _qk.getD(dom1);
        console.log(v)
    }, 200)


    return _qk;
}
