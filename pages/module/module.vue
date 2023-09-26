<template>
	<view style="font-size: 20px;color: #bfa;">
		{{msg}}
		{{code}}
	</view>
	<button @tap="start">开启保活</button>
	<button @tap="stop">结束保活</button>
	<button @tap="addKewpie">开启守护</button>
	<button @tap="removeKewpie">结束守护</button>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	const msg = ref('')
	const code = ref('')

	const start = () => {
		const KeepAlive = uni.requireNativePlugin('Luomor-Keep-Alive')
		// 启动服务
		KeepAlive.start({
				"title": "烙馍网App",
				"text": "正在后台运行"
			},
			function(ret) {
				console.log(ret)
				if (ret.code == 1) {
					uni.showToast({
						title: '启动成功',
						icon: 'none'
					})
				}
			})
	}
	const stop = () => {
		const KeepAlive = uni.requireNativePlugin('Luomor-Keep-Alive')
		// 销毁服务
		const ret = KeepAlive.destroy();
		if (ret.code === 0) {
			uni.showToast({
				title: '停止服务',
				icon: 'none'
			})
		}
	}
	const addKewpie = () => {
		const KeepAlive = uni.requireNativePlugin('Luomor-Keep-Alive')
		// 开启守护
		KeepAlive.addKewpie({}, function(ret) {
				if (ret.code === 0) {
					uni.showToast({
						title: '开启守护',
						icon: 'none'
					})
				}
			})
	}
	const removeKewpie = () => {
		const KeepAlive = uni.requireNativePlugin('Luomor-Keep-Alive')
		// 结束守护
		KeepAlive.removeKewpie({}, function(ret) {
				if (ret.code === 0) {
					uni.showToast({
						title: '结束守护',
						icon: 'none'
					})
				}
			})
	}
</script>

<style lang="scss">

</style>