import React, { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action";
import { removeFromCart } from "../redux/action";

const Product = (props: any) => {

    // yha current data aa rha
    const item = props.item;
    const dispatch = useDispatch();

    // cart mei kitne items hai
    const cartItems = useSelector((state) => state.reducer)

    // current vla item added hai ya nhi uske liye we take state
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (item: any) => {
        // console.warn('called', item);
        //Method to call action is dispatch
        dispatch(addToCart(item));

    }

    const handleRemoveFromCart = (item) => {
        // console.warn(item);
        dispatch(removeFromCart(item.name));

    }

    useEffect(() => {
        if (cartItems && cartItems.length) {
            cartItems.forEach((element) => {
                // console.warn(element);
                if (element.name === item.name) {
                    // iss state k base pe hum condition lgayenge niche
                    setIsAdded(true)
                }

            });
        }

    }, [cartItems])

    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 15, marginBottom: 60 }}>


            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 20 }}>{item.color}</Text>
            <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
            {
                isAdded ?
                    <Button title='Remove to Cart' onPress={() => handleRemoveFromCart(item)} />
                    :
                    <Button title='Add to Cart' onPress={() => handleAddToCart(item)} />

            }



        </View>
    );
};

export default Product;