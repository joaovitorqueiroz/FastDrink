export function listDrinksCategoriesRequest() {
    return {
        type: '@home/LIST_DRINKS_CATEGORIES_REQUEST',
    };
}
export function listDrinksCategoriesSuccess(DrinksCategories) {
    return {
        type: '@home/LIST_DRINKS_CATEGORIES_SUCCESS',
        DrinksCategories,
    };
}
