import URadio from "./URadio.vue";
import UTextInput from "./UTextInput.vue";
import URadioGroup from "./URadioGroup.vue";

const components = [
    {name: 'UTextInput', component: UTextInput},
    {name: 'URadio', component: URadio},
    {name: 'URadioGroup', component: URadioGroup},
]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}