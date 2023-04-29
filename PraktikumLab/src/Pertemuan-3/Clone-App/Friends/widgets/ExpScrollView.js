import React from "react";
import { ScrollView } from "react-native";
import UserItem from "./UserItem";
import Users from "../../const-data/ObjDummies"; // Import Users dari file eksternal

const ExpScrollView = () => {
    return (
        <ScrollView>
            {Users.map((v,index) => ( 
                <UserItem item={v} key={index} />
            ))}
        </ScrollView>
    )
}

export default ExpScrollView;