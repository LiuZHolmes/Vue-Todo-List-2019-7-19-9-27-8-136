<template>
	<div>
		<el-row class="tac">
			<el-col>
				<el-menu
				router
				:default-opendeds="default_opens"
				class="el-menu-vertical-demo">
				<el-submenu index="1">
					<template slot="title">
						<span slot="title">导航</span>
					</template>
					<el-menu-item-group>
					<el-menu-item :index="myTodoList">TodoList列表</el-menu-item>
					<el-menu-item :index="mySetting">我的</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: "navigateSideBar",
	props: {
		username: String
	},
  data() {
    return {
      default_opens: [1]
    };
	},
	computed: {
		myTodoList() {
			return `/main/${this.username}`;
		},
		mySetting() {
			return `/${this.username}/my`;
		}
	},
	methods: {
	}
};
</script>

<style scoped>
div {
  float: left;
  text-align: left;
  margin-right: 225px;
}
</style>

