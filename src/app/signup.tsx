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

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [loading, setLoading] = useState(false)

  function validate() {
    const nextErrors = { name: "", email: "", password: "", confirmPassword: "" }

    if (!name.trim()) {
      nextErrors.name = "O nome é obrigatório"
    }

    if (!email.trim()) {
      nextErrors.email = "O e-mail é obrigatório"
    } else if (!emailRegex.test(email.trim())) {
      nextErrors.email = "Digite um e-mail válido"
    }

    if (!password.trim()) {
      nextErrors.password = "A senha é obrigatória"
    } else if (password.length < 6) {
      nextErrors.password = "A senha precisa ter pelo menos 6 caracteres"
    }

    if (!confirmPassword.trim()) {
      nextErrors.confirmPassword = "Confirme sua senha"
    } else if (confirmPassword !== password) {
      nextErrors.confirmPassword = "As senhas não coincidem"
    }

    setErrors(nextErrors)
    return Object.values(nextErrors).every((error) => !error)
  }

  function handleSignUp() {
    if (!validate()) {
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      Alert.alert("Conta criada", `Bem-vindo, ${name.trim()}!`)
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
            <Text style={styles.title}>Criar conta</Text>
            <Text style={styles.subtitle}>Preencha os dados abaixo para começar.</Text>
          </View>

          <Image source={require("../assets/img2.png")} style={styles.illustration} />

          <View style={styles.form}>
            <Input
              label="Nome"
              placeholder="Seu nome"
              value={name}
              onChangeText={setName}
              error={errors.name}
              autoCapitalize="words"
              returnKeyType="next"
            />
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
              placeholder="Crie uma senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              error={errors.password}
              returnKeyType="next"
            />
            <Input
              label="Confirmar senha"
              placeholder="Repita a senha"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              error={errors.confirmPassword}
              returnKeyType="done"
            />
            <Button label="Cadastrar" loading={loading} onPress={handleSignUp} />
          </View>

          <Text style={styles.footerText}>
            Já tem uma conta? {" "}
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
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: theme.colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.subtitle,
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
