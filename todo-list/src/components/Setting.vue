<template>
	<div>
		<navigateSideBar :username="username" class="sidebar"/>
		<div class="profile">
			<span>Avatar:  </span>
			<el-image
      style="width: 100px; height: 100px"
      :src="imageURL"
      fit="fill"></el-image>
			<br/>
			<span>Username:  </span>
			<el-input v-model="username" placeholder="Type your number here..."/>
			<span>Phone:  </span>
			<el-input v-model="phoneNumber" placeholder="Type your phone number here..."/>
		</div>
	</div>
</template>

<script>
import navigateSideBar from "./navigateSideBar" ;
export default {
	name: "Setting",
	props: {
		msg: String
	},
	components: {
		navigateSideBar
	},
	data() {
			return {
				imageURL:'https://avatars3.githubusercontent.com/u/16951022?s=460&v=4',
				phoneNumber: ""
			}
	},
	methods: {
	},
	computed: {
		username() {
			return this.$route.params.username;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
	float: left;
}
</style>
