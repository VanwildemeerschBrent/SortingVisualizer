<template>
	<div id="app" class="bg-gray-700 w-screen h-screen">
		<div id="nav" class="w-screen h-auto bg-green-500 flex text-center text-bg-gray-700 text-lg">
			<router-link
				class="p-4 flex-1 border-r border-gray-700 border-b-2 border-gray-700"
				to="/bubble-sort"
			>BubbleSort</router-link>
			<router-link class="p-4 flex-1 border-r border-gray-700" to="/selection-sort">SelectionSort</router-link>
			<router-link class="p-4 flex-1 border-r border-gray-700" to="/cycle-sort">CycleSort</router-link>
			<router-link class="p-4 flex-1 border-r border-gray-700" to="/merge-sort">MergeSort</router-link>
			<router-link class="p-4 flex-1 border-r border-gray-700" to="/bogo-sort">Bogo Sort</router-link>
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
