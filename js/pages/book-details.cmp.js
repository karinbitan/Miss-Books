import { bookService } from './../services/book-service.js';
import reviewAdd from './../cmp/review-add.cmp.js';
import reviewList from './../cmp/review-list.cmp.js';

export default {
    data() {
        return {
            isOnSale: null,
            book: null
        }
    },
    template: `
<section v-if="book" class="book-details">
    <div>
        <h1>Details</h1>
    <h3 class="capitalize">{{book.title}}</h3>
    <p> <span class="capitalize">{{book.subtitle}} </span>
    <br />
    <h4>Book authors:</h4> {{book.authors}}
    <br />
    <h4>Published date:</h4> {{book.publishedDate}}, {{bookOld}}
    <br />
    <h4>Description:</h4> {{book.description}}
    <br />
    <h4>Page count:</h4> {{book.pageCount}} , {{readingLevel}}
    <br />
    <h4>Categories:</h4> {{book.categories}}
    <br />
    <img :src="book.thumbnail" />
    <br />
    <h4>Language:</h4> {{book.language}}
    <br />
    <h4>Price:</h4> <span :class="priceColor">{{book.listPrice.amount}} {{book.listPrice.currencyCode}}</span>
    <div class="sale" v-if="isOnSale">
        <h1>On sale!!</h1>
    </div>
        </p>
    </div>
    <section class="review-container">
        <review-list :bookId="book.id" />
        <review-add :bookId="book.id" />
    </section>
</section>
`,
    computed: {
        readingLevel() {
            if (this.book.pageCount > 500) return 'long reading';
            else if (this.book.pageCount > 200) return 'decent reading';
            else if (this.book.pageCount < 100) return 'light reading';
            else return '';
        },
        bookOld() {
            var year = new Date().getFullYear();
            var bookAge = year - this.book.publishDate;
            if (bookAge > 10) return 'Veteran book';
            else if (bookAge < 1) return 'New!'
        },
        priceColor() {
            return { red: this.book.listPrice.amount > 150, green: this.book.listPrice.amount < 20, }
        },
        bookOnSale() {
            if (this.book.listPrice.isOnSale) this.isOnSale = true;
        },
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getBookById(id)
            .then((book) => this.book = book);
    },
    components: {
        reviewAdd,
        reviewList
    }

}

