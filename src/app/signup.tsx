import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { Link } from "expo-router"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

export default function Signup() {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: "padding", android: "height" })}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <Image
                        source={require("@/assets/img2.png")}
                        style={styles.illustration}
                    />

                    <Text style={styles.title}>Cadastrar </Text>
                    <Text style={styles.subtitle}>
                        Crie sua conta para acessar.
                    </Text>

                    <View style={styles.form}>
                        <Input placeholder="Nome" />
                        <Input placeholder="E-mail" keyboardType="email-address" />
                        <Input placeholder="Senha" secureTextEntry />
                        <Input placeholder="Confirmar Senha" secureTextEntry />
                        <Button label="Cadastrarr"
                        />
                    </View>

                    <Text style={styles.footerText}>
                        Já tem uma conta? {""}
                        <Link href="/" style={styles.footerLink}>
                            Entre aqui.
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