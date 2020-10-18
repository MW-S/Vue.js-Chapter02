let MyPlugin = {}
//编写插件对象的install方法
MyPlugin.install = function(app, options) {
	console.log(options)
	app.directive('my-directive', {
		bind(el, binding) {
			//为自定义指令v-my-directive绑定DOM元素设置HTML
			console.log('el:' + el)
			el.innerHTML = 
				"<div class='compareNumber' style='flex-direction: column;'>" +
				"<div >" +
				"<label>账号：</label>" +
				"<input class='form-control' style='width: 300px;' type='text'  name='text' id='account' placeholder= '请输入账号' />" +
				"</div>" +
				"<div>" +
				"<label >密码：</label>" +
				"<input class='form-control' style='width: 300px;' type='text' name='text' id='pwd' placeholder='请输入密码' />" +
				"</div>" +
				"</div>" +
				"<div class='compareNumber'  style='padding: 0px 120px;margin-top: 10px;'>" +
				"<a class='btn btn-info btn-lg btn-block'' onClick='login()'>登录</a>" +
				"</div>" +
				"<div class='compareNumber' style='margin-top: 10px;'>" +
				  "<label>用于测试的账号与密码：</label>" +
				  "<label>账号：admin</label>" +
				  "<label>密码：123456</label>" +
				"</div>" 
		}
	})
}
Vue.use(MyPlugin, {
	paramOne: true
})
var vm = new Vue({
	el: '#app',
	data: {
		account: '',
		pwd: '',
		error: false,
		errorMsg: '',
		success: false
	}
})
function login(){
	var pwd = $("#pwd").val();
	var account = $("#account").val();
	if (account === 'admin' && pwd === '123456') {
	  vm.$data.error = false
	  vm.$data.success = true
	  vm.$data.errorMsg = '登录成功！'
	} else if (account === 'admin' && pwd !== '123456') {
	  vm.$data.success = false
	  vm.$data.error = true
	  vm.$data.errorMsg = '密码错误！'
	} else {
	  vm.$data.success = false
	  vm.$data.error = true
	  vm.$data.errorMsg = '用户不存在！'
	}
	return ''
}
