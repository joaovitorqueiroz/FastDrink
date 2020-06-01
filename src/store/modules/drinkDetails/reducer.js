export default function listDrinks(state = [], action) {
    switch (action.type) {
        case '@drink_details/DRINK_DETAILS_SUCCESS':
            return action.Drink;
        default:
            return state;
    }
}
