import Layer from './components/layer/layer.js'
import './css/common.css'
//只是演示语法es6，创建一个构造函数，并且实例化内部语句会依次执行
const App = function(){
	var dom =document.getElementById('app');
	var layer = new Layer();
	dom.innerHTML = layer.tpl({
		name:'ejs template',
		arr:['apple','西瓜','香蕉']
	});
}
new App()

/*
	var dom =document.getElementById('app');
	var layer = new Layer();
	dom.innerHTML = layer.tpl;
*/