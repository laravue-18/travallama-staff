import './bootstrap';
import '../css/app.css';
import 'view-ui-plus/dist/styles/viewuiplus.css'

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import ViewUIPlus from 'view-ui-plus'
import locale from 'view-ui-plus/dist/locale/en-US';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(ViewUIPlus, { locale })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
