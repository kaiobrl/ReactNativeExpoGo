import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"
import { theme } from "../theme"

type InputProps = TextInputProps & {
  label?: string
  error?: string
}

export function Input({ label, error, style, ...rest }: InputProps) {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, error ? styles.inputError : null, style]}
        placeholderTextColor="#8f97ae"
        {...rest}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  label: {
    marginBottom: 6,
    color: theme.colors.subtitle,
    fontSize: 13,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    minHeight: 52,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radii.sm,
    backgroundColor: theme.colors.surface,
    fontSize: 16,
    color: theme.colors.text,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  errorText: {
    marginTop: 6,
    color: theme.colors.error,
    fontSize: 12,
  },
})
