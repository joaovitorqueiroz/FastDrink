export default function listDrinks(state = [], action) {
    switch (action.type) {
        case '@drinks/LIST_DRINKS_OF_SEARCH_SUCCESS':
            return action.Drinks;
        case '@drinks/LIST_DRINKS_OF_CATEGORY_SUCCESS':
            return action.Drinks;
        default:
            return state;
    }
}
