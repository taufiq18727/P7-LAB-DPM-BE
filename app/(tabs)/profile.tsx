import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedView } from "@/components/ThemedView";

const ProfileScreen = () => {
    const router = useRouter();

    const handleLogout = () => {
        if (Platform.OS === 'web') {
            const confirmLogout = window.confirm("Are you sure you want to logout?");
            if (confirmLogout) {
                AsyncStorage.removeItem("token").then(() => {
                    router.replace("/auth/LoginScreen");
                });
            }
        } else {
            Alert.alert(
                "Logout",
                "Are you sure you want to logout?",
                [
                    {
                        text: "Cancel",
                        style: "cancel",
                    },
                    {
                        text: "OK",
                        onPress: async () => {
                            await AsyncStorage.removeItem("token");
                            router.replace("/auth/LoginScreen");
                        },
                    },
                ]
            );
        }
    };

    return (
        <ThemedView style={styles.container}>
            <Text>Profile Screen</Text>
            <Button title="Logout" onPress={handleLogout} />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ProfileScreen;