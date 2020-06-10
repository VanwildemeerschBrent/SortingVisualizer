<template>
	<div class="w-full text-white">
		<p class="p-4 text-5xl text-center">Bubble Sorting Algorithm</p>
		<FilterComponent class="fixed bottom-0 w-screen h-auto bg-green-500" />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import FilterComponent from "../components/FilterComponent.vue";

	export default Vue.extend({
		name: "BubbleSort",
		components: {
			FilterComponent
		}
	});
</script>

<style scoped>
</style>