import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';

const workOptions = [
    'Interior Painting',
    'Exterior Painting',
    'Wall Putty',
    'Texture Painting',
    'Waterproof Coating',
    'Spray Painting',
    'Wood Polishing'
];

const PainterScreen = ({ navigation }) => {

    const [form, setForm] = useState({
        name: '',
        mobile: '',
        village: '',
        district: '',
        address: '',
        experience: '',
        email: '',
        dob: '',
        age: '',
        height: '',
        weight: '',
        works: []
    });

    const toggleWork = (work) => {
        let updated = [...form.works];

        if (updated.includes(work)) {
            updated = updated.filter(w => w !== work);
        } else {
            updated.push(work);
        }

        setForm({ ...form, works: updated });
    };

    const handleDob = (text) => {
        const year = new Date(text).getFullYear();
        const current = new Date().getFullYear();
        const age = current - year;

        setForm({ ...form, dob: text, age: age ? String(age) : '' });
    };

    const handleSave = () => {
        console.log('Painter Data:', form);
        navigation.goBack();
    };

    return (

        <ScrollView style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Painter Profile</Text>

            <TextInput
                placeholder="Name"
                style={styles.input}
                value={form.name}
                onChangeText={(t) => setForm({ ...form, name: t })}
            />

            <TextInput
                placeholder="Mobile"
                keyboardType="phone-pad"
                style={styles.input}
                value={form.mobile}
                onChangeText={(t) => setForm({ ...form, mobile: t })}
            />

            <TextInput
                placeholder="Village"
                style={styles.input}
                value={form.village}
                onChangeText={(t) => setForm({ ...form, village: t })}
            />

            <TextInput
                placeholder="District"
                style={styles.input}
                value={form.district}
                onChangeText={(t) => setForm({ ...form, district: t })}
            />

            <TextInput
                placeholder="Full Address"
                style={styles.input}
                value={form.address}
                onChangeText={(t) => setForm({ ...form, address: t })}
            />

            <Text style={styles.section}>Types of Work</Text>

            {workOptions.map((item) => (
                <TouchableOpacity
                    key={item}
                    style={styles.checkboxRow}
                    onPress={() => toggleWork(item)}
                >
                    <View style={[
                        styles.checkbox,
                        form.works.includes(item) && styles.checked
                    ]} />
                    <Text>{item}</Text>
                </TouchableOpacity>
            ))}

            <TextInput
                placeholder="Experience (years)"
                keyboardType="numeric"
                style={styles.input}
                value={form.experience}
                onChangeText={(t) => setForm({ ...form, experience: t })}
            />

            <TextInput
                placeholder="Email (optional)"
                style={styles.input}
                value={form.email}
                onChangeText={(t) => setForm({ ...form, email: t })}
            />

            <TextInput
                placeholder="DOB YYYY-MM-DD"
                style={styles.input}
                value={form.dob}
                onChangeText={handleDob}
            />

            <TextInput
                placeholder="Age"
                editable={false}
                style={styles.input}
                value={form.age}
            />

            <TextInput
                placeholder="Height"
                style={styles.input}
                value={form.height}
                onChangeText={(t) => setForm({ ...form, height: t })}
            />

            <TextInput
                placeholder="Weight"
                style={styles.input}
                value={form.weight}
                onChangeText={(t) => setForm({ ...form, weight: t })}
            />

            <TouchableOpacity style={styles.save} onPress={handleSave}>
                <Text style={{ color: '#fff' }}>Save Profile</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default PainterScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#eef6ef' },
    back: { fontSize: 18, color: '#007aff', marginBottom: 10 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12
    },
    section: { fontWeight: 'bold', marginVertical: 10 },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    checkbox: {
        width: 22,
        height: 22,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 4
    },
    checked: { backgroundColor: '#2e7d32' },
    save: {
        backgroundColor: '#2e7d32',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    }
});