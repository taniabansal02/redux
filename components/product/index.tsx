import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";

const Product = (props:any) => {
    const item = props.item;
    const dispatch = useDispatch();

    const handleAddToCart = (item:any) => {
        // console.warn('called', item);
        //Method to call action is dispatch
        dispatch(addToCart(item));
        
    }

    return (
        <View style={{alignItems:'center', borderBottomColor:'orange', borderBottomWidth:2, padding:15, marginBottom:60}}>
            
           
                <Text style={{fontSize:20}}>{item.name}</Text>
                <Text style={{fontSize:20}}>{item.price}</Text>
                <Text style={{fontSize:20}}>{item.color}</Text>
                <Image style={{width:200, height:200}} source={{uri: item.image}} />
                <Button title='Add to Cart' onPress={() => handleAddToCart(item)} />

            
        </View>
    );
};

export default Product;