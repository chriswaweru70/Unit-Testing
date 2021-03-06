import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import vuetify from "vuetify"
import Vue from 'vue';
import ZipCodeInput from '@/components/ZipCodeInput.vue';
import DisplayTemperature from '@/components/DisplayTemperature.vue';

describe('Home.vue', () => {
    let wrapper;
    let title = 'Weather App'
    beforeEach(() => {
        Vue.use(vuetify)
        wrapper = shallowMount(Home);
    })
    it('renders a vue instance', () => {
        expect(shallowMount(Home).isVueInstance()).toBe(true)
    });
    it('Checks the data-title', () => {
        expect(wrapper.vm.title).toMatch('Weather App')
    });
    it('has an h2', () => {
        expect(wrapper.contains('h2')).toBe(true)
    });
    it('test if it has ZipCodeInput component imported', () => {
        expect(wrapper.contains(ZipCodeInput)).toBe(true)
    });
    it('test if it has DisplayTemperature component imported', () => {
        expect(wrapper.contains(DisplayTemperature)).toBe(true)
    });
    it('test event emitted from ZipcodeInput', () => {
        wrapper.find(ZipCodeInput).vm.$emit('save');
        expect(wrapper.find(ZipCodeInput).emitted().save).toBeTruthy()
    })
})