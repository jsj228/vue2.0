<template>
	<div class="loginBox">
		<div>
			<returnPage-v></returnPage-v>
			<h1>{{ loginMsg }}</h1>
			<p><input type="text" placeholder="用户名/邮箱/手机号"></p>
			<p><input type="text" placeholder="登陆密码"></p>
			<p style="margin-top:25px;"><input type="button" value="登 陆" class="bgGreen">  <a href="#" class="minBtn bgRed">忘记密码</a></p>
			<p><a href="#" >没有账号可以去注册！</a></p>
		</div>
	</div>
</template>
<script>
export default {
  name: 'userRegisterName',
  data () {
    return {
      loginMsg:"这里是用户登陆页面"
    }
  },
  methods:{
	  localStorageFun(){
		if(!window.localStorage){
            alert("浏览器不支持localstorage");
        }else{
            var storage=window.localStorage;
            //写入a字段
            storage["a"]=1;
            //写入b字段
            storage.b=1;
            //写入c字段
            storage.setItem("c",3);
            console.log(storage.a);
            storage.a=4;
            console.log(storage.a);
        }
	  }
  },
  mounted(){
	  this.localStorageFun();
  }
}
</script>
<style scoped>
.loginBox{display:flex;height:100%;justify-content:center;flex-direction:row-reverse;align-items:center;}
.loginBox [type="text"]{padding:5px 0 5px 30px;border-bottom:1px solid #666;}
[type="button"],a{line-height:32px;padding:5px 25px;}
#returnPage{position:absolute;top:10px;left:10px;}
</style>
