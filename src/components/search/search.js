import { DivComponent } from '../../common/div-component';
import '../search/search.css';


export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    search() {
        const value = this.el.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render() {
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class="search__wrapper">
                <img src="../static/img/search.svg" alt="icon-search" />
                <input type="text" placeholder="Search for a book or an author" class="search__input" 
                value="${this.state.searchQuery ? this.state.searchQuery : ''}">
            </div>
            <button class="search__button" aria-label="Search"><img src="../static/img/search-big.svg" alt="icon-search-big"/></button>
        `;
        this.el.querySelector('button').addEventListener('click', this.search.bind(this));
        this.el.querySelector('input').addEventListener('keydown', (event) => {
            if (event.code === 'Enter') {
                this.search();
            }
        });

        return this.el;
    }

}