import { bookService } from './../services/book-service.js';
import bookFilter from './../cmp/book-filter.cmp.js';
import bookList from './../cmp/book-list.cmp.js';
import bookDetails from './../pages/book-details.cmp.js';

export default {
    template: `
    <section>
        <h1>Our Books</h1>
        <book-filter @filtered="setFilter"></book-filter>
        <book-list :books="booksToShow"></book-list>
        <!-- <book-details :book="selectedBook"></book-details> -->
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
                return book.title.toLowerCase().includes(txt) && (book.listPrice.amount >= this.filterBy.fromPrice)
                    && (book.listPrice.amount <= this.filterBy.toPrice); 
            })
        }
    },
    created() {
         bookService.getBooks().then( (books) =>{
             this.books = books;
         });
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    components: {
        bookList,
        bookDetails,
        bookFilter
    }
}
