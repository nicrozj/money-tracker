import URadio from "./URadio.vue";
import UTextInput from "./UTextInput.vue";
import URadioGroup from "./URadioGroup.vue";
import UHeading from "./UHeading.vue";
import UBlock from "./UBlock.vue";

const components = [
    {name: 'UTextInput', component: UTextInput},
    {name: 'URadio', component: URadio},
    {name: 'URadioGroup', component: URadioGroup},
    {name: 'UHeading', component: UHeading},
    {name: 'UBlock', component: UBlock},
]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}