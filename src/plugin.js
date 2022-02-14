import directive from './directive.ts'

const inputPatternDirectivePlugin = {
    install(Vue, options) {
        if (this.installed) { return }

        this.installed = true

        Vue.directive('input-pattern', directive)
    }
}

export default inputPatternDirectivePlugin