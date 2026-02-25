import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TextInputProps
} from 'react-native';

interface InputFieldProps extends TextInputProps {
    label: string;
    placeholder: string;
}

const InputField = ({ label, placeholder, ...props }: InputFieldProps) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            placeholder={placeholder}
            style={styles.input}
            {...props}
        />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: { marginBottom: 16 },
    label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 6 },
    input: { backgroundColor: '#fff', padding: 18, borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
});

export default InputField;
