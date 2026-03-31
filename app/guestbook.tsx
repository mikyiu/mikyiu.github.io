import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Guestbook() {
  return (
    <View style={styles.pageContainer}>
      
      <View style={styles.windowFrame}>
        
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Guestbook.exe - Application Error</Text>
          <Link href="/" style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </Link>
        </View>

        <View style={styles.solidBody}>
          
          <View style={styles.errorContentRow}>
            <Text style={styles.iconPlaceholder}></Text>
            <Text style={styles.errorText}>
              The GUESTBOOK.EXE file is currently UNDER CONSTRUCTION. 
              Please check back later or contact the System Administrator.
            </Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <Link href="/" style={styles.okButton}>
              <Text style={styles.buttonText}>OK</Text>
            </Link>
          </View>

        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  windowFrame: {
    width: '100%',
    maxWidth: 400, 
    borderWidth: 2,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
    backgroundColor: '#c0c0c0', 
  },
  titleBar: {
    backgroundColor: '#000080', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 2, 
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'W95FA',
    fontWeight: 'bold',
    marginLeft: 4,
    fontSize: 12,
  },
  closeButton: {
    backgroundColor: '#c0c0c0',
    paddingHorizontal: 6,
    borderWidth: 2,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
    marginLeft: 10,
    textDecorationLine: 'none', 
  },
  closeText: {
    color: '#000',
    fontFamily: 'W95FA',
    fontWeight: 'bold',
    fontSize: 12,
  },
  solidBody: {
    backgroundColor: '#c0c0c0', 
    padding: 20,
  },
  errorContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25, 
    paddingHorizontal: 10,
  },
  iconPlaceholder: {
    fontSize: 32,
    marginRight: 20,
  },
  errorText: {
    color: '#000', 
    fontFamily: 'W95FA',
    fontSize: 14,
    lineHeight: 20,
    flex: 1, 
  },
  buttonContainer: {
    alignItems: 'center', 
  },
  okButton: {
    backgroundColor: '#c0c0c0',
    paddingVertical: 4,
    paddingHorizontal: 30, 
    borderWidth: 2,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
    textDecorationLine: 'none',
  },
  buttonText: {
    color: '#000',
    fontFamily: 'W95FA',
  }
});