<template>
	<div>
		<v-alert
			data-test="alertElement"
			type="success"
			:value="true"
			outline
		>The current temperature in is F.</v-alert>
	</div>
</template>

<script>
export default {
	props: {
		city: {
			type: String
		},
		fahrenheitTemperature: {
			type: Number
		}
	}
}
</script>