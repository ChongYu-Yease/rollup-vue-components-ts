import demo from './demo.vue'

const components = [demo]

const install = (Vue) => {
    if ((install as any).installed) return
    ;(install as any).installed = true
    components.forEach((component: any) => {
        Vue.component(component.extendOptions.name, component)
    })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
    install((window as any).Vue)
}

export default {
    install,
}
