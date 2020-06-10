<template>
	<div class="w-full text-white">
		<p class="p-4 text-5xl text-center">Bubble Sort Algorithm</p>
		<div class="flex inline-block w-full h-auto p-4 sorting_container" v-if="arrItems">
			<div
				class="flex-1 float-left bg-green-500 position-relative"
				v-for="item in arrItems"
				:key="item.id"
				:style="item.style"
			></div>
		</div>
		<FilterComponent
			class="fixed bottom-0 w-screen h-auto bg-green-500"
			:arraySize.sync="arraySize"
			@onClickStartSorting="onClickStartBubbleSort"
		/>
	</div>
</template>

<script >
	import Vue from "vue";
	import FilterComponent from "../components/FilterComponent.vue";

	export default Vue.extend({
		name: "BubbleSort",
		components: {
			FilterComponent
		},
		data() {
			return {
				arraySize: 10,
				arrItems: []
			};
		},

		mounted() {
			this.setArrayItems();
		},

		watch: {
			arraySize() {
				this.setArrayItems();
			}
		},

		computed: {},

		methods: {
			setArrayItems() {
				this.arrItems = [];
				for (let i = 1; i <= this.arraySize; i++) {
					const randomNumber = Math.round(
						Math.random() * (this.arraySize - 1) + 1
					);

					this.arrItems.push({
						id: i,
						value: randomNumber,
						style: this.getHeightForArrayItem(randomNumber)
					});
				}
			},
			getHeightForArrayItem(item) {
				const heightOfElement =
					window.innerHeight * 0.6 * (item / this.arraySize);
				return `height:${heightOfElement}px`;
			},
			onClickStartBubbleSort() {
				for (let i = 0; i < this.arraySize; i++) {
					for (let j = 0; j < this.arraySize - 1 - i; j++) {
						if (this.arrItems[j].value > this.arrItems[j + 1].value) {
							const tmp = this.arrItems[j];
							this.arrItems[j] = this.arrItems[j + 1];
							this.arrItems[j + 1] = tmp;
							this.$forceUpdate();
						}
					}
				}
			}
		}
	});
</script>

<style scoped>
</style>