import animation from './animation'
import loading from './loading'

const components = {
    animation,
    loading
}

const install = (Vue, opts = {}) => {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })
}

export default install
