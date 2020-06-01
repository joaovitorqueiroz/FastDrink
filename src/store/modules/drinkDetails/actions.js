export function drinkDetailsRequest(DrinkId) {
    return {
        type: '@drink_details/DRINK_DETAILS_REQUEST',
        DrinkId,
    };
}
export function drinkDetailsSuccess(Drink) {
    return {
        type: '@drink_details/DRINK_DETAILS_SUCCESS',
        Drink,
    };
}
