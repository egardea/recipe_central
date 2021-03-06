import { elements } from './base';
import { Fraction } from 'fractional';

export const clearRecipe = () => {
    elements.recipe.innerHTML = '';
};

const formatCount = count => {
    if (count) {
        const [int, dec] = count.toString().split('.').map(el => parseInt(el, 10));

        if(!dec) return count;

        if(int === 0){
            const fraction = new Fraction(count);
            return `${fraction.numerator}/${fraction.denominator}`;
        } else {
            const fraction = new Fraction(count - int);
            return `${int} ${fraction.numerator}/${fraction.denominator}`;
        }
    }
    return '?';
}

const createIngredient = ingredient => `
    <li class="ingredient">
        <p class="recipe-count"><i class="fas fa-check"></i> ${formatCount(ingredient.count)} ${ingredient.unit} ${ingredient.ingredient}</p>
    </li>
`;
export const renderRecipe = (recipe, isLiked)  => {
    const markup = `
        <figure class="recipe-figure">
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe-img">
            <h1 class="recipe-title">
            <span>${recipe.title}</span>
            </h1>
        </figure>

        <div class="recipe-info">
            <div class="servings">
                <span>
                    <i class="fas fa-users"></i>
                </span>
                <h4 class="recipe-servings">${recipe.servings}</h4>
            </div>

            <div class="cook-time">
                <span>
                    <i class="fas fa-clock"></i>
                </span>
                    <h4>${recipe.time}</h4>
            </div>

            <div class="like-basket">
                <span  id="like-btn" style="${isLiked ? '' : '#FFB904'};">
                    <i class="fas fa-shopping-basket"></i>
                </span>
            </div>
        </div>

        <div class="ingredient-info">
            <ul class="ingredient-list">
            ${recipe.ingredients.map(el => createIngredient(el)).join('')}
                
            </ul>
            <div class="ingredient-btn">
                <button class="add-to-shopping">
                    <i class="fas fa-list-ol"></i> Add to shopping list
                </button>
            </div>
        </div>
    `;

    elements.recipe.insertAdjacentHTML('afterbegin', markup);
};
