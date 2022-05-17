# ddui 一个Vue UI组件
[![.github/workflows/ci.yml](https://github.com/Tomvictory/ddui/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/Tomvictory/ddui/actions/workflows/ci.yml)

## 介绍
## 开始使用
1.添加css样式
	使用本框架前，请在 css 中开启 border-box
	```
	*,*::before,*::after{box-sizing: border-box;}
	```
	IE8 及以上浏览器都支持


	你还需要设置默认颜色等变量（后续会改为scss变量）
	```
	:root {	--button-height: 32px;
					--font-size: 14px;
					--button-bg: white;
					--button-active-bg: #eee;
					--border-radius: 4px;
					--color: #333;
					--border-color: #999;
					--border-color-hover: #666;
	}
	```
	IE15 及以上浏览器都支持

2.安装ddui
	```
	npm i -S ddui tom-test-1
	```

3.引入ddui
	```
	import {Icon,Button,ButtonGroup,} from './components/button.vue'
	import 'tom-test-1/dist/index.css'
	
	export default {
	  name: 'app',
	  compoents: {
		  'd-icon': Icon,
		  'd-button': Button
	  }
	}
	```



## 文档
## 提问
## 变更记录
## 联系方式

## 贡献代码


