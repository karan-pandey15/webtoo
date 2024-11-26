 



// import {
//     FlatList,
//     StyleSheet,
//     View,
// } from "react-native";
// import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import data from "../data/data.json";  // Assuming you have product data in this file
// import ProductCard from "../components/ProductCard";
// import Header from "../components/Header";

// const MilkBreadScreen = () => {
//     const [products, setProducts] = useState(data.products);
//     const navigation = useNavigation();

//     const handleProductDetails = (item) => {
//         navigation.navigate("PRODUCT_DETAILS", { item });
//     };

//     const toggleFavorite = (item) => {
//         setProducts(
//             products.map((prod) => {
//                 if (prod.id === item.id) {
//                     return { ...prod, isFavorite: !prod.isFavorite };
//                 }
//                 return prod;
//             })
//         );
//     };

//     return (
//         <>
//             <Header />
//             <View style={styles.container}>
//                 <FlatList
//                     data={products}
//                     numColumns={2}
//                     renderItem={({ item }) => (
//                         <ProductCard
//                             item={item}
//                             handleProductClick={handleProductDetails}
//                             toggleFavorite={toggleFavorite}
//                         />
//                     )}
//                     keyExtractor={(item) => item.id.toString()}
//                     showsVerticalScrollIndicator={false}
//                     columnWrapperStyle={styles.columnWrapper}
//                 />
//             </View>
//         </>
//     );
// };

// export default MilkBreadScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",  // Light background color for a clean look
//         paddingHorizontal: 30,
//         paddingTop: 16,
//     },
//     columnWrapper: {
//         justifyContent: "space-between",
//         marginBottom: 16,
//     },
// });



import {
    FlatList,
    StyleSheet,
    View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import data from "../data/data.json";  // Assuming you have product data in this file
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

const MilkBreadScreen = () => {
    const [products, setProducts] = useState(data.products);
    const navigation = useNavigation();

    // const handleProductDetails = (item) => {
    //     navigation.navigate("PRODUCT_DETAILS", { item });
    // };

    const handleProductDetails = (item) => {
        Alert.alert("Coming Soon", ` ${item.name} will be available soon.`);
      };

    const toggleFavorite = (item) => {
        setProducts(
            products.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, isFavorite: !prod.isFavorite };
                }
                return prod;
            })
        );
    };

    return (
        <>
            <Header />
            <View style={styles.container}>
                <FlatList
                    data={products}
                    numColumns={2} // Two columns for the product grid
                    renderItem={({ item }) => (
                        <ProductCard
                            item={item}
                            handleProductClick={handleProductDetails}
                            toggleFavorite={toggleFavorite}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>
        </>
    );
};

export default MilkBreadScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 40, // Reduced horizontal padding
        paddingTop: 16,
    },
    columnWrapper: {
        justifyContent: "space-between", // Space between columns
        marginBottom: 12, // Reduced space between rows
    },
});
