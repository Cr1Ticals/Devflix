class NavbarMenu {
    constructor (nav_menu, nav_list, nav_item) {
        this.nav_menu = document.querySelector(nav_menu);
        this.nav_list = document.querySelector(nav_list);
        this.nav_item = document.querySelectorAll(nav_item);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateItems() {
        this.nav_item.forEach((link, index) => {
            link.style.animation
             ? (link.style.animation = "") 
             : (link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick() {
        this.nav_list.classList.toggle(this.activeClass);
        this.nav_menu.classList.toggle(this.activeClass);
        this.animateItems();
    }

    addClickEvent() {
        this.nav_menu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.nav_menu) {
            this.addClickEvent();
        }
        return this;
    }
}

const navbarMenu = new NavbarMenu(
    ".nav_menu",
    ".nav_list",
    ".nav_item",
);
navbarMenu.init();