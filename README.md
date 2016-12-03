#基于webpack的多页脚手架
+ 第1步, 安装所需插件  

     npm i  

+ 第2步，安装完成后，配置init.config.js
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

####编辑安装脚本, 编辑init.config.js
####安装完毕,自动创建项目结构: node init
####开发阶段: npm run dev
####编译阶段: npm run build

