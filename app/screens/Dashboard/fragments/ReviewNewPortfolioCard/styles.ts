import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 16,
  },
  content: {
    width: '80%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  riskCard: {
    borderRadius: 5,
    padding: 4,
  },
  riskCardLabel: {
    textAlign: 'center',
  },
  title: {
    marginRight: 18,
  },
});

export default styles;
