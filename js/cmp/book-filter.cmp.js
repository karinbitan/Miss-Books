
export default {
    template: `
    <section class="book-filter">
    <h3>Filter books:</h3>
    <form @submit.prevent="emitFilter" >
    <input type="text" v-model="filterBy.byName" placeholder="Filter by book name"/>
    <label>From price: <input type="range" v-model.number="filterBy.fromPrice" /></label>
    <label>To price: <input type="range" v-model.number="filterBy.toPrice" /></label>
    <button>Filter</button>
    </form>
    </section>
`,
    data() {
        return {
            filterBy: { byName: '', fromPrice: 0, toPrice: Infinity }
        }
    },
    methods: {
        emitFilter(){
            this.$emit('filtered', this.filterBy)
        }
    }
}
