import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native"
import { theme } from "../theme"

type ButtonProps = TouchableOpacityProps & {
  label: string
  loading?: boolean
  containerStyle?: ViewStyle
}

export function Button({ label, loading = false, disabled, style, containerStyle, ...rest }: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <TouchableOpacity
      style={[styles.container, isDisabled && styles.disabled, style, containerStyle]}
      activeOpacity={0.8}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 52,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radii.sm,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 3,
  },
  disabled: {
    backgroundColor: theme.colors.disabled,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
})
