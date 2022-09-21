import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  btnCancel: {
    flex: 1,
  },
  btnClose: {
    flex: 1,
    marginLeft: 17,
  },
  content: {
    paddingBottom: 45,
  },
  customContainer: {
    marginTop: 5,
  },
  input: {
    minHeight: 166,
    textAlignVertical: 'top',
  },
});

export default styles;
