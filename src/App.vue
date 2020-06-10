<template>
	<div id="app" class="bg-gray-700 w-screen h-screen">
		<div id="nav" class="w-screen h-auto bg-green-500 flex text-center text-bg-gray-700">
			<router-link class="p-4 flex-1 border-r border-gray-700" to="/sort-bubble">BubbleSort</router-link>
			<router-link class="p-4 flex-1 border-r border-gray-700" to="/sort-selection">SelectionSort</router-link>
			<router-link class="p-4 flex-1 border-r border-gray-700" to="/sort-cycle">CycleSort</router-link>
			<router-link class="p-4 flex-1 border-r border-gray-700" to="/sort-merge">MergeSort</router-link>
			<router-link class="p-4 flex-1 border-r border-gray-700" to="/sort-bogo">Bogo Sort</router-link>
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
