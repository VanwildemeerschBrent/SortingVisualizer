<template>
	<div id="app" class="w-screen h-screen bg-gray-700">
		<div id="nav" class="flex w-screen h-auto text-lg text-center">
			<router-link
				class="flex-1 p-4 bg-green-500 border-r border-gray-700 opacity-75 text-bg-gray-700 hover:opacity-100"
				to="/bubble-sort"
				:class="{'opacity-100':$route.fullPath==='/bubble-sort'}"
			>Bubble Sort</router-link>
			<router-link
				class="flex-1 p-4 bg-green-500 border-r border-gray-700 opacity-75 text-bg-gray-700 hover:opacity-100"
				to="/selection-sort"
				:class="{'opacity-100':$route.fullPath==='/selection-sort'}"
			>Selection Sort</router-link>
			<router-link
				class="flex-1 p-4 bg-green-500 border-r border-gray-700 opacity-75 text-bg-gray-700 hover:opacity-100"
				to="/insertion-sort"
				:class="{'opacity-100':$route.fullPath==='/insertion-sort'}"
			>Insertion Sort</router-link>
			<router-link
				class="flex-1 p-4 bg-green-500 border-r border-gray-700 opacity-75 text-bg-gray-700 hover:opacity-100"
				to="/merge-sort"
				:class="{'opacity-100':$route.fullPath==='/merge-sort'}"
			>MergeSort</router-link>
			<router-link
				class="flex-1 p-4 bg-green-500 border-r border-gray-700 opacity-75 text-bg-gray-700 hover:opacity-100"
				to="/quick-sort"
				:class="{'opacity-100':$route.fullPath==='/quick-sort'}"
			>Quick Sort</router-link>
		</div>
		<router-view />
	</div>
</template>


<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
