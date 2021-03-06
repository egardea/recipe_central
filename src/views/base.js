export const elements = {
    searchInput: document.querySelector('.search-field'),
    searchForm: document.querySelector('.search'),
    searchResList: document.querySelector('.box-1'),
    recipe: document.querySelector('.box-2'),
    shopping: document.querySelector('.shop-list'),
    shoppingBtn: document.querySelector('.shop-btn'),
    likesMenuBtn: document.querySelector('.right'),
    likesList: document.querySelector('.likes-list')
};

export const elementStrings = {
    loader: 'loader'
};

//We insert the loader here
export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <i class="fas fa-spinner"></i>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

//We clear the loader here
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
};