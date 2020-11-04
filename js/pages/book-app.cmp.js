import { bookService } from './../services/book-service.js';
import bookFilter from './../cmp/book-filter.cmp.js';
import bookList from './../cmp/book-list.cmp.js';
import bookDetails from './../pages/book-details.cmp.js';
import bookAdd from './../cmp/book-add.cmp.js';
import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
    <section>
        <h1>Our Books</h1>
        <book-add />
        <book-filter @filtered="setFilter" />
        <book-list :books="booksToShow" />
    </section>
    `,
    data() {
        return {
            books: bookService.getBooks(),
            filterBy: null,
            // selectedBook: null
        }
    },
    computed: {
        booksToShow() {
            if (this.filterBy === null) return this.books;
            const byName = this.filterBy.byName.toLowerCase();
            return this.books.filter((book) => {
                return book.title.toLowerCase().includes(byName) && (book.listPrice.amount >= this.filterBy.fromPrice)
                    && (book.listPrice.amount <= this.filterBy.toPrice);
            })
        }
    },
    created() {
        bookService.getBooks().then((books) => {
            this.books = books;
        });
        eventBus.$on('book-added', () => {
            bookService.getBooks().then((books) => {
                this.books = books;
            });
        })
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    components: {
        bookList,
        bookDetails,
        bookFilter,
        bookAdd
    }
}
