<template>
	<div class="w-auto text-white">
		<div class="text-xl text-center">
			<button class="p-4 hover:bg-green-800">Retry</button>
			<button class="p-4 hover:bg-green-800" @click="$emit('onClickStartSorting')">Play</button>
			<button class="p-4 hover:bg-green-800">Stop</button>
		</div>
		<div class="text-lg text-center">
			<div class="inline-block p-2">
				<label class="relative w-2/12 px-6 text-center">Array Size</label>
				<input
					type="number"
					class="w-3/12 text-center text-white bg-green-700"
					:placeholder="400"
					max="1000"
					step="1"
					v-model.number="sizeOfArray"
				/>
			</div>
			<div class="p-2">
				<label class="relative w-2/12 px-6 text-center">Sorting Speed</label>
				<input
					class="h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128"
					type="range"
					min="1"
					max="1000"
					step="10"
					v-model.number="sortSpeed"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		name: "FilterComponent",

		props: {
			arraySize: { required: true, type: Number, default: 10 },
			sortingSpeed: { required: true, type: Number, default: 500 },
		},

		data() {
			return {
				sizeOfArray: this.arraySize,
				sortSpeed: this.sortingSpeed,
			};
		},

		watch: {
			sizeOfArray() {
				this.$emit("update:arraySize", this.sizeOfArray);
			},
			sortSpeed() {
				this.$emit("update:sortingSpeed", this.sortSpeed);
			},
		},
	});
</script>

<style scoped>
</style>