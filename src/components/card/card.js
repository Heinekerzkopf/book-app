import { DivComponent } from '../../common/div-component';
import '../card/card.css';


export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    #addToFavorites() {
        this.appState.favorites.push(this.cardState);
    }

    #deleteFromFavorites() {
        this.appState.favorites = this.appState.favorites.filter(
            book => book.key !== this.cardState.key
        );
    }

    render() {
        this.el.classList.add('card');
        const existInFavorites = this.appState.favorites.find(
            b => b.key == this.cardState.key
        );
        this.el.innerHTML = `
        
            <div class="card__image">

                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="book-cover" />

            </div>
            <div class="card__info">

                <div class="card__book-genre">${this.cardState.subject ? this.cardState.subject[0] : 'None'}</div>
                <div class="card__book-title">${this.cardState.title}</div>
                <div class="card__book-author">${this.cardState.author_name ? this.cardState.author_name[0] : 'None'}</div>
                <div class="card__footer">
            
                <button class="card__button ${existInFavorites ? 'card_button-active' : ''}">

                    ${existInFavorites ? '<img src="../../static/img/favorites.svg" alt="book-in-favorites-icon">' 
                    : '<img src="../../static/img/favorite-white.svg" alt="add-book-to-favorites-icon">'}

                </button>

            </div>

            </div>
        
        `;

        if (existInFavorites) {
            this.el.querySelector('button').addEventListener('click', this.#deleteFromFavorites.bind(this));
        } else {
            this.el.querySelector('button').addEventListener('click', this.#addToFavorites.bind(this));
        }

        return this.el;
    }

}