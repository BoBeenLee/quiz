import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  Quiz: {
    color: 'pink',
  },
});

export interface QuizProps {}

export function Quiz(props: QuizProps) {
  return <Text style={styles.Quiz}>hello world</Text>;
}

export default Quiz;
