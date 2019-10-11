<template>
	<div>
		<v-text-field>
			type="input"
			single-line
			placeholder="Enter US Zip Code"
			data-test="zipCodeText"
			v-model="inputText"
		</v-text-field>
		<v-btn v-on:click="save" data-test="saveButton" color="primary">Enter</v-btn>
	</div>
</template>

<script>
export default {
	props: {},
	data() {
		return {
			inputText: ''
		}
	},
	methods: {
		save() {
			this.$emit('save', this.inputText)
			this.inputText = ''
		}
	}
}
</script>