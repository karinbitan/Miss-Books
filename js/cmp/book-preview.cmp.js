export default {
    props: ['book'],
    template: `
    <section class="book-preview">
        <h2>{{book.title}}</h2>
        <p>{{book.listPrice.amount}} <span>{{priceCurrecy}}</span></p>
        <router-link :to="'/book/' +book.id" exact>Select book</router-link>
    </section>
`,
    computed: {
        priceCurrecy(){
            return this.book.listPrice.currencyCode;
        }
    }
}
