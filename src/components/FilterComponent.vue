<template>
	<div class="w-auto text-white">
		<div class="text-xl text-center">
			<button class="p-4 hover:bg-green-800">Retry</button>
			<button class="p-4 hover:bg-green-800">Play</button>
			<button class="p-4 hover:bg-green-800">Stop</button>
		</div>
		<div class="text-lg text-center">
			<div class="inline-block p-2">
				<label class="relative w-2/12 px-6 text-center">Array Size</label>
				<input type="range" />
			</div>
			<div class="p-2">
				<label class="relative w-2/12 px-6 text-center">Sorting Speed</label>
				<input type="range" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		name: "FilterComponent"
	});
</script>

<style scoped>
</style>