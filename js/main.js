import { myRouter } from './routes.js';
// import bookApp from './pages/book-app.cmp.js';
import bookHeader from './cmp/book-header.cmp.js';
import bookFooter from './cmp/book-footer.cmp.js';
import userMsg from './cmp/user-msg.cmp.js';

const options = {
    el: "#app",
    router: myRouter,
    template: `
    <section>
        <book-header />
        <main class="main-content">
        <router-view></router-view>
    </main>
    <user-msg />
        <book-footer />
    </section>

    `,
    components: {
        // bookApp,
        bookHeader,
        bookFooter,
        userMsg
    }
}

const app = new Vue(options);