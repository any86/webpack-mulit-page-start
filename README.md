#基于webpack的多页脚手架
###第1步, 安装所需插件  

     npm i    

###第2步，安装完成后，配置init.config.js

```javascript
module.exports = {
	view: {
	    index: {
	        components: ['header', 'banner', 'footer'],
	    },
	    list: {
	        components: ['header','list', 'footer']
	    }		
	},
	cdn: {
		css: ['http://cdn.bootcss.com/bootstrap/4.0.0-alpha.5/css/bootstrap.css'],
		js: ['http://libs.baidu.com/jquery/1.11.1/jquery.js']
	}
};
```

####建议先用例子直接生成一次项目，然后观察下目录结构命名就了解了没个字段的含义   

view代表每个页面   

components代表当前页面引入了那些组件(组件包含html/js/scss)   

cdn的配置会直接引入到页面底部   

+ 第3步，运行初始化命令, node init  

自动生成项目目录结构:
	src
	  commponents
	  js
	  css
	  view
	  font
	  vendor








####编辑安装脚本, 编辑init.config.js
####安装完毕,自动创建项目结构: node init
####开发阶段: npm run dev
####编译阶段: npm run build

