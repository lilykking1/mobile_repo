import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  confirmationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmations: {
    marginLeft: 16,
  },
  container: {
    borderRadius: 24,
    marginTop: 30,
    padding: 32,
    width: '100%',
  },
  fullContainer: {
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  tooltipStyle: {
    position: 'absolute',
    right: -10,
    top: 0,
  },
  valueContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  valueContent: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 1,
  },
  valueText: {
    marginLeft: 12,
  },
});

export default styles;
