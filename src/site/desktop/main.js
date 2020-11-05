import { createApp } from 'vue';
import App from './App';

createApp(App).mount('#app');

(() => {
    for (let codePoint of 'foo') {
        console.log(codePoint)
    }
    const a = 'dw3ee';
    console.log(a);
})();