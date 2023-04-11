import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {

    // hum reducer ka data nikalenge
    //useSelector takes a callbaack fun
    // agr humne store mei reducer ki jgah xyz likha hota toh hum likhenge  const cartData = useSelector((state) => state.xyz)
    const cartData = useSelector((state) => state.reducer)

    const[cartItems, setCartItems] = useState(0);
    // console.warn(cartData);

    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])

    return (
        <View>
            <Text style={{textAlign:'right', padding: 15, backgroundColor:'orange', fontSize:30}}> {cartItems} </Text>
        </View>
    );
};

export default Header;