import { createLocalVue, shallowMOunt } from '@vue/test-utils'
import DisplayTemperature from '@/components/DisplayTemperature.vue'
import vuetify from "vuetify"

describe('DisplayTemperature', () => {
    let wrapper;
    let city = "Salt Lake city"
    let fahrenheitTemperature = 39
    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(vuetify)

        wrapper = shallowMount(DisplayTemperature, {
            localVue,
            propsData: {
                city,
                fahrenheitTemperature
            }
        })
    })

    it('has a alert element', () => {
        expect(wrapper.contains('[data-test="alertElement"]')).toBe(true)
    })

    it('checks props', () => {
        expect(wrapper.vm.city).toBe('Salt Lake City')
    })

    it('check the output', () => {
        expect(wrapper.text()).toMatch(`The current temperature in ${city} is ${fahrenheitTemperature} F.`)
    })
});