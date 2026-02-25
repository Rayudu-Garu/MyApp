import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import InputField from './InputField';

interface FormState {
    name: string;
    mobile: string;
    village: string;
    district: string;
    address: string;
    experience: string;
    email: string;
    dob: string;
    age: string;
    height: string;
    weight: string;
    works: string[];
}

interface Props {
    navigation: NativeStackNavigationProp<any>;
}

const workOptions = [
    'Ploughing',
    'Sowing',
    'Harvesting',
    'Tractor Driving',
    'Pesticide Spraying',
    'Irrigation'
];

const FarmerScreen = ({ navigation }: Props) => {
    const [form, setForm] = useState<FormState>({
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

    const toggleWork = (work: string) => {
        let updated = [...form.works];
        if (updated.includes(work)) {
            updated = updated.filter(w => w !== work);
        } else {
            updated.push(work);
        }
        setForm({ ...form, works: updated });
    };

    const handleDob = (text: string) => {
        const year = new Date(text).getFullYear();
        const current = new Date().getFullYear();
        const age = current - year;
        setForm({ ...form, dob: text, age: age ? String(age) : '' });
    };

    const handleSave = () => {
        console.log(form);
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Farmer Profile</Text>

            <InputField label="Full Name" placeholder="Enter name" value={form.name} onChangeText={(t: string) => setForm({ ...form, name: t })} />
            <InputField label="Mobile Number" placeholder="Enter mobile" keyboardType="phone-pad" value={form.mobile} onChangeText={(t: string) => setForm({ ...form, mobile: t })} />
            <InputField label="Village Name" placeholder="Enter village" value={form.village} onChangeText={(t: string) => setForm({ ...form, village: t })} />
            <InputField label="District Name" placeholder="Enter district" value={form.district} onChangeText={(t: string) => setForm({ ...form, district: t })} />
            <InputField label="Full Address" placeholder="Enter address" value={form.address} onChangeText={(t: string) => setForm({ ...form, address: t })} />

            <Text style={styles.section}>Types of Work</Text>
            {workOptions.map((item) => (
                <TouchableOpacity key={item} style={styles.checkboxRow} onPress={() => toggleWork(item)}>
                    <View style={[styles.checkbox, form.works.includes(item) && styles.checked]} />
                    <Text>{item}</Text>
                </TouchableOpacity>
            ))}

            <InputField label="Experience (years)" placeholder="Enter years" keyboardType="numeric" value={form.experience} onChangeText={(t: string) => setForm({ ...form, experience: t })} />
            <InputField label="Email Id" placeholder="Enter email (optional)" value={form.email} onChangeText={(t: string) => setForm({ ...form, email: t })} />
            <InputField label="Date of Birth" placeholder="YYYY-MM-DD" value={form.dob} onChangeText={handleDob} />
            <InputField label="Age" placeholder="Auto-calculated" editable={false} value={form.age} />
            <InputField label="Height" placeholder="Enter height" value={form.height} onChangeText={(t: string) => setForm({ ...form, height: t })} />
            <InputField label="Weight" placeholder="Enter weight" value={form.weight} onChangeText={(t: string) => setForm({ ...form, weight: t })} />

            <TouchableOpacity style={styles.save} onPress={handleSave}>
                <Text style={{ color: '#fff' }}>Save Profile</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default FarmerScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5' },
    back: { fontSize: 18, color: '#222222', marginBottom: 10,fontStyle:'normal',
        fontWeight:900
     },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    section: { fontWeight: 'bold', marginVertical: 10 },
    checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
    checkbox: { width: 22, height: 22, borderWidth: 1, marginRight: 10, borderRadius: 4 },
    checked: { backgroundColor: '#d5c72d' },
    save: { backgroundColor: '#1a641e', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20, marginBottom:30 }
});
