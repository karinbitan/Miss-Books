import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
<section class="book-list">
    <div class="book-container">
        <div class="book" v-for="book in books" :key="book.id">
            <book-preview :book="book" />
            </div>
        </div>
</section>
`,
    methods: {
        // selectBook(bookId) {
        //     this.$emit('selected', bookId)
        // }
    },
    components: {
        bookPreview
    }
}
