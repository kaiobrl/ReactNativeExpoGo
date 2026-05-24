import { Link } from "expo-router"
import { useState } from "react"
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

import { Button } from "../components/Button"
import { Input } from "../components/Input"

export default function Index() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignIn() {
        if (!email.trim() || !password.trim()) {
            return Alert.alert("Entrar", "Preencha e-mail e senha para continuar.")
        }
        Alert.alert("Bem-vindo", `Login realizado com ${email}`)
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: "padding", android: "height" })}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <Image
                        source={require("../assets/img1.png")}
                        style={styles.illustration}
                    />

                    <Text style={styles.title}>Entrar</Text>
                    <Text style={styles.subtitle}>
                        Acesse sua conta com email e senha.
                    </Text>

                    <View style={styles.form}>
                        <Input
                            placeholder="E-mail"
                            keyboardType="email-address"
                            onChangeText={setEmail}
                        />

                        <Input placeholder="Senha"
                            secureTextEntry
                            onChangeText={setPassword}
                        />

                        <Button label="Entrar" onPress={handleSignIn} />
                    </View>

                    <Text style={styles.footerText}>
                        Não tem uma conta? {""}
                        <Link href="/signup" style={styles.footerLink}>
                            Cadastre-se aqui.
                        </Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFDFD",
        padding: 32,
    },
    illustration: {
        width: "100%",
        height: 330,
        resizeMode: "contain",
        marginTop: 62,
    },
    title: {
        fontSize: 32,
        fontWeight: 900,
    },
    subtitle: {
        fontSize: 16,
    },
    form: {
        marginTop: 32,
        gap: 12,
    },
    footerText: {
        textAlign: "center",
        marginTop: 32,
        color: "#585860",
    },
    footerLink: {
        color: "#3366ff",
        fontWeight: 700,
    },
})