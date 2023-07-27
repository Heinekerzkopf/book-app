import { DivComponent } from "../common/div-component";
import '../components/header/header.css';


export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="../static/img/logo.svg" alt="logo" />
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="../static/img/search.svg" alt="icon-search" />
                    Search for a book
                </a>
                <a class="menu__item" href="#favorites">
                    <img src="../static/img/favorites.svg" alt="icon-favorite" />
                    Favorites
                    <div class="menu__counter">${this.appState.favorites.length}</div>
                </a>
            </div>
        `;
        return this.el;
    }

}