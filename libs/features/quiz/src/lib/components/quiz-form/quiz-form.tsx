import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  QuizForm: {
    color: 'pink',
  },
});

export interface QuizFormProps {
  
}

export function QuizForm(props: QuizFormProps) {
  return <Text style={styles.QuizForm}>hello world</Text>;
}

export default QuizForm;
