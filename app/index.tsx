import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.pageContainer}>
      
      <View style={styles.windowFrame}>
        
        {/* Title Bar */}
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Home Page :3c</Text>
          <View style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </View>
        </View>

        {/* IE Menu & Toolbars */}
        <View style={styles.toolbarContainer}>
          <View style={styles.menuRow}>
            <Text style={styles.menuText}>File</Text>
            <Text style={styles.menuText}>Edit</Text>
            <Text style={styles.menuText}>View</Text>
            <Text style={styles.menuText}>Go</Text>
            <Text style={styles.menuText}>Favorites</Text>
            <Text style={styles.menuText}>Help</Text>
          </View>
          
          <View style={styles.addressRow}>
            <Text style={styles.addressLabel}>Address</Text>
            <View style={styles.addressInput}>
              <Text style={styles.addressInputText}>http://hihihihihihihihihihihihihihihihihi.com</Text>
            </View>
          </View>
        </View>

        {/* Embedded "Webpage" Area */}
        <View style={styles.webpageBody}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>
            
            <View style={styles.headerRow}>
              <Image 
                source={require('../assets/images/hello.gif')} 
                style={[styles.spinnyImageLeft, { imageRendering: 'pixelated' } as any]} 
              />
              
              <Text style={styles.headerText}>Greetings! \(^-^)/</Text>

              <Image 
                source={require('../assets/images/hello2.gif')} 
                style={[styles.spinnyImageRight, { imageRendering: 'pixelated' } as any]} 
              />
            </View>

            <Text style={styles.bodyText}>
              Hello! Welcome Welcome :) You might be wondering "what the hecky is this site" but fear not stranger! This was something I made to practice/learn about nonsnese while I wanted to make an update carrd, but this time for me and not my character ^_^
              Disclaimer: The longer you read this, the longer you might question your life choices and decisions that lead you up to this moment. I am not liable for any lost brain cells or something tragic that manages to somehow magically points back to this website.
              P.S. Only cool people are allowed here. If you're uncool or even worse... if you're one of my opps, then bye bye (Ok uncool people can stay, just not any of my opps OR IF YOU'RE HIM!!!!1!!!! ) o/  
              *Note: Some things are under construction, will they ever be finished? Who knows but be warned*
            </Text>

            <Image 
              source={require('../assets/images/runningcat1.gif')} 
              style={[styles.runningCat, { imageRendering: 'pixelated' } as any]}
              
            />
            
          </ScrollView>
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
    padding: 15, 
  },
  windowFrame: {
    width: '100%',
    maxWidth: 600, 
    maxHeight: '85%', 
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
    paddingVertical: 4,
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'W95FA', 
    fontWeight: 'bold',
    marginLeft: 4,
  },
  closeButton: {
    backgroundColor: '#c0c0c0',
    paddingHorizontal: 6,
    borderWidth: 2,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
  },
  closeText: {
    color: '#000',
    fontFamily: 'W95FA', 
    fontWeight: 'bold',
  },
  toolbarContainer: {
    backgroundColor: '#c0c0c0',
    paddingHorizontal: 4,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#808080', 
  },
  menuRow: {
    flexDirection: 'row',
    paddingVertical: 6,
  },
  menuText: {
    fontFamily: 'W95FA',
    color: '#000',
    marginRight: 15,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  addressLabel: {
    fontFamily: 'W95FA',
    color: '#000',
    marginRight: 10,
  },
  addressInput: {
    flex: 1,
    backgroundColor: '#ffffff', 
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderWidth: 2,
    borderTopColor: '#808080', 
    borderLeftColor: '#808080',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
  },
  addressInputText: {
    fontFamily: 'W95FA',
    color: '#000',
  },
  webpageBody: {
    flex: 1, 
    backgroundColor: '#ffffff', 
    borderWidth: 2,
    borderTopColor: '#808080',
    borderLeftColor: '#808080',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
    margin: 4, 
    padding: 15, 
  },
  scrollContent: {
    alignItems: 'center', 
    paddingRight: 10, 
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: 20,
  },
  spinnyImageLeft: {
    width: 48,
    height: 48,
    marginRight: 15, 
  },
  spinnyImageRight: {
    width: 48,
    height: 48,
    marginLeft: 15, 
  },
  headerText: {
    color: '#240835', 
    fontFamily: 'W95FA', 
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyText: {
    color: '#000000', 
    fontFamily: 'W95FA', 
    fontSize: 14, 
    textAlign: 'center',
    lineHeight: 22, 
    marginBottom: 30, 
  },
  runningCat: {
    marginBottom: 40,
  }
});