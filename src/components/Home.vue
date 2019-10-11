<template>
	<v-container>
		<v-flex xs12>
			<h2></h2>
			<ZipCodeInput v-on:save="processZipCode($event)"></ZipCodeInput>
			<DisplayTemperature
			:city="city"
			:fahrenheitTemperature="fahrenheitTemperature"></DisplayTemperature>
		</v-flex>
	</v-container>
</template>

<script>
import DisplayTemperature from '../components/DisplayTemperature.vue'
import ZipCodeInput from '../components/ZipCodeInput.vue'
import Model from './Model'
var model = new Model()

export default {
	data: () => ({
		title: 'Weather App',
		fahrenheitTemperature: null,
		city: ''
	}),

	components: {
		DisplayTemperature,
		ZipCodeInput
	},

	methods: {
		processZipCode(code) {
			var data = model.fetchResponse(window.fetch, code)
			data.then(res => {
				let kelvinTemp = res.main.temp
				this.FahrenheitConverter(kelvinTemp)
				this.city = res.name
			})
		}
	}
}
</script>
