import { Link } from "expo-router"
import { useState } from "react"
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { theme } from "../theme"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Index() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)

  function validate() {
    const nextErrors = { email: "", password: "" }

    if (!email.trim()) {
      nextErrors.email = "O e-mail é obrigatório"
    } else if (!emailRegex.test(email.trim())) {
      nextErrors.email = "Digite um e-mail válido"
    }

    if (!password.trim()) {
      nextErrors.password = "A senha é obrigatória"
    }

    setErrors(nextErrors)
    return !nextErrors.email && !nextErrors.password
  }

  async function handleSignIn() {
    if (!validate()) {
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      Alert.alert("Bem-vindo", `Login realizado com ${email.trim()}`)
    }, 800)
  }

  return (
    <KeyboardAvoidingView
      style={styles.safeArea}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.hero}>
            <Text style={styles.brand}>MyApp</Text>
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha.</Text>
          </View>

          <Image source={require("../assets/img1.png")} style={styles.illustration} />

          <View style={styles.form}>
            <Input
              label="E-mail"
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
              returnKeyType="next"
            />

            <Input
              label="Senha"
              placeholder="Sua senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              error={errors.password}
              returnKeyType="done"
            />

            <Button label="Entrar" loading={loading} onPress={handleSignIn} />
          </View>

          <Text style={styles.footerText}>
            Não tem uma conta? {" "}
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
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    justifyContent: "space-between",
  },
  hero: {
    marginBottom: theme.spacing.md,
  },
  brand: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: theme.colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.subtitle,
    lineHeight: 24,
  },
  illustration: {
    width: "100%",
    height: 320,
    resizeMode: "contain",
    marginTop: theme.spacing.lg,
  },
  form: {
    marginTop: theme.spacing.xl,
    gap: theme.spacing.sm,
  },
  footerText: {
    textAlign: "center",
    marginTop: theme.spacing.xl,
    color: theme.colors.subtitle,
    fontSize: 14,
  },
  footerLink: {
    color: theme.colors.primary,
    fontWeight: "700",
  },
})
