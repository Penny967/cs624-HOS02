import React, { useState } from 'react';
import {
  ScrollView, View, Text, Image,
  TextInput, StyleSheet,
} from 'react-native';

// 课程数据 – 8 Core + 2 Depth + 1 Capstone
const coreCourses = [
  'CS624_01_ON: Full-Stack Dev - Mobile App',
  'CS504_01_IN: Software Engineering',
  'CS533_02_IN: Computer Architecture ',
  'CS628_01_ON: Full-Stack Dev-Web Application',
  'CS11B_01_ON: Tech & Comput Components II',
  'DS620_02_IN: Machine Learning/Deep Learning',
  'CS519_03_IN: Cloud Computing Overview',
  'CS11A_02_IN: Tech & Comput Compnoents I',
];
const depthCourses = ['CS624_01_ON: Full-Stack Dev - Mobile App', 'CS504_01_IN: Software Engineering'];
const capstone = ['CS533_02_IN: Computer Architecture'];

export default function App() {
  const [favorite, setFavorite] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* app img */}
      <Image source={require('../../assets/images/icon.png')}
      style={styles.icon} />

      {/* TextInput – Input Favorite Class */}
      <TextInput
        placeholder="Enter your favorite course"
        value={favorite}
        onChangeText={setFavorite}
        style={styles.input}
      />
      {favorite !== '' && (
        <Text style={styles.fav}>My favorite course: {favorite}</Text>
      )}

      {/* Course List */}
      <Section title="Core Courses" data={coreCourses} />
      <Section title="Depth of Study" data={depthCourses} />
      <Section title="Capstone" data={capstone} />
    </ScrollView>
  );
}

/* Reusable List Section Component (Functional Arrow) */
const Section = ({ title, data }) => (
  <View style={styles.block}>
    <Text style={styles.h1}>{title}</Text>
    {data.map((c) => (
      <Text key={c} style={styles.item}>• {c}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  icon: { width: 120, height: 120, marginVertical: 16 },
  input: {
    width: '100%', borderWidth: 1, borderColor: '#aaa',
    borderRadius: 8, padding: 8, marginBottom: 12,
  },
  fav: { fontWeight: '700', marginBottom: 16 },
  block: { width: '100%', marginBottom: 24 },
  h1: { fontSize: 20, fontWeight: '700', marginBottom: 6 },
  item: { fontSize: 16, marginLeft: 8, marginVertical: 2 },
});