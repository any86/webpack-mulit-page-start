# 基于webpack的多页脚手架, 3步搞定
### 第1步, 安装所需插件  

     npm i    

### 第2步，安装完成后，配置init.config.js

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

#### 建议先用例子直接生成一次项目，然后观察下目录结构命名就了解了每个字段的含义, 注1。
 


### 第3步，运行初始化命令, node init ,自动生成目录

```   
node init
```    

#### 目录(node init生成的):

```
src
    commponents
    js
    scss
    view
    font
    vendor
```


#### 至此，安装完成。   


---


#### 开发阶段: npm run dev
#### 编译阶段: npm run build  

#### 关于mock   

项目下的mock文件夹已经搭建了静态服务器，根据项目自行放入相应的json文件即可，访问地址localhost:8080/mock/xx.json   

#### 注意说明：

1. view代表每个页面   

components代表当前页面引入了那些组件(组件包含html/js/scss)   

cdn的配置会直接引入到页面底部   
