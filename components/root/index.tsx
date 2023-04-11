import React from "react";
import { Text, View, Image, Button, ScrollView } from "react-native";
import Header from "../header";
import Product from "../product";


const App = () => {

    const products = [
        {
            name:'Samsung Mobile',
            color:'white',
            price:'30000',
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            name:'Apple I Phone',
            color:'black',
            price:'130000',
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            name:'Nokia Mobile',
            color:'green',
            price:'20000',
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            name:'Redmi Mobile',
            color:'red',
            price:'12000',
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        }
    ]

    return (
       <View>
        <Header />
        <ScrollView>
        {
            // Passing item as props
            products.map((item) => <Product item = {item} />)
        }
        </ScrollView>
        
       </View>
    );
};

export default App;