export default function drinksCategories(state = [], action) {
    switch (action.type) {
        case '@home/LIST_DRINKS_CATEGORIES_SUCCESS':
            return action.DrinksCategories;
        default:
            return state;
    }
}
