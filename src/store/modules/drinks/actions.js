export function listDrinksOfSearchRequest(DrinkSearch) {
    return {
        type: '@drinks/LIST_DRINKS_OF_SEARCH_REQUEST',
        DrinkSearch,
    };
}
export function listDrinksOfSearchSuccess(Drinks) {
    return {
        type: '@drinks/LIST_DRINKS_OF_SEARCH_SUCCESS',
        Drinks,
    };
}
export function listDrinksOfCategoryRequest(NameCategory) {
    return {
        type: '@drinks/LIST_DRINKS_OF_CATEGORY_REQUEST',
        NameCategory,
    };
}
export function listDrinksOfCategorySuccess(Drinks) {
    return {
        type: '@drinks/LIST_DRINKS_OF_CATEGORY_SUCCESS',
        Drinks,
    };
}
