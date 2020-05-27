import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListIngredients = ({drink}) => {
    return (
        <View style={styles.container}>
            {drink.strIngredient1 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure1}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient1}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient2 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure2}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient2}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient3 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure3}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient3}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient4 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure4}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient4}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient5 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure5}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient5}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient6 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure6}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient6}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient7 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure7}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient7}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient8 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure8}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient8}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient9 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure9}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient9}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient10 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure10}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient10}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient11 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure11}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient11}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient12 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure12}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient12}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient13 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure13}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient13}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient14 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure14}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient14}
                    </Text>
                </View>
            ) : null}

            {drink.strIngredient15 ? (
                <View style={styles.rowIngredients}>
                    <Icon name="check" size={25} color="#333" />

                    <Text style={styles.measureText}>{drink.strMeasure15}</Text>
                    <Text style={styles.ingredientText}>
                        {drink.strIngredient15}
                    </Text>
                </View>
            ) : null}
        </View>
    );
};

export default ListIngredients;
