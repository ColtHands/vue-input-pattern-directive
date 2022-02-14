import { DirectiveOptions } from 'vue/types'

const directive: DirectiveOptions = {
    bind(el, { name, value, oldValue, expression, arg, modifiers }, vnode, oldVnode) {
        console.log('directive el', el)
        console.log('directive value', value)
        console.log('directive expression', expression)
        console.log('directive arg', arg)
        console.log('directive modifiers', modifiers)
        console.log('directive vnode', vnode)
    },
    inserted() {},
    update() {},
    componentUpdated() {},
    unbind() {}
}

export default directive