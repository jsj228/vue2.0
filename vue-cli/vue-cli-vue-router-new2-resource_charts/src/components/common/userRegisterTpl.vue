<template>
	<div class="loginBox">
		<div>
			<returnPage-v></returnPage-v>
			<h1>{{ loginMsg }}</h1>
			<p><input type="text" placeholder="用户名/邮箱/手机号"></p>
			<p><input type="text" placeholder="登陆密码"></p>
			<p><input type="text" placeholder="再次输入登陆密码"></p>
			<p style="margin-top:25px;"><input type="button" value="注  册" class="bgGreen">  <a href="#" class="minBtn bgRed">去登陆</a></p>
        <p style="margin-top:30px">
			<a href="#" >查看注册协议！</a>
			<label><input type="radio" name="isAgree"  value="1" />同意</label>
        	<label><input type="radio" name="isAgree" value="0" checked/>不同意</label>
         </p>
		</div>
	</div>
</template>
<script>
export default {
  name: 'userRegisterName',
  data () {
    return {
      loginMsg:"这里是用户注册页面"
    }
  }
}
</script>
<style scoped>
.loginBox{display:flex;height:100%;justify-content:center;flex-direction:row-reverse;align-items:center;}
.loginBox [type="text"]{padding:5px 0 5px 30px;border-bottom:1px solid #666;}
[type="button"],a{line-height:32px;padding:5px 10px;}
#returnPage{position:absolute;top:10px;left:10px;}
</style>
