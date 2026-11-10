import { useState } from 'react';
import { Image, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const CAT_PHOTOS = [
  require('../assets/cats/cat1.png'),
  require('../assets/cats/cat2.png'),
  require('../assets/cats/cat3.png'),
  require('../assets/cats/cat4.png'),
];

export default function Index() {
  const [showCatModal, setShowCatModal] = useState(false);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);

  const handleAppCloseAttempt = () => {
    const randomCat = Math.floor(Math.random() * CAT_PHOTOS.length);
    setCurrentCatIndex(randomCat);
    setShowCatModal(true);
  };

  return (
    <View style={styles.pageContainer}>
      
      {Platform.OS === 'web' && (
        <style>{`
          /* Target ALL scrollable elements to force the 3D style */
          *::-webkit-scrollbar { width: 16px; background: #dfdfdf; }
          *::-webkit-scrollbar-thumb { background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #000000; border-right: 2px solid #000000; }
          *::-webkit-scrollbar-thumb:active { border-top: 2px solid #000000; border-left: 2px solid #000000; border-bottom: 2px solid #ffffff; border-right: 2px solid #ffffff; }
          *::-webkit-scrollbar-button { display: block; background-color: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #000000; border-right: 2px solid #000000; background-repeat: no-repeat; background-position: center; height: 16px; width: 16px; }
          *::-webkit-scrollbar-button:active { border-top: 2px solid #000000; border-left: 2px solid #000000; border-bottom: 2px solid #ffffff; border-right: 2px solid #ffffff; }
          *::-webkit-scrollbar-button:start:increment, *::-webkit-scrollbar-button:end:decrement { display: none; }
          *::-webkit-scrollbar-button:start:decrement { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 4L4 8h8z" fill="black"/></svg>'); }
          *::-webkit-scrollbar-button:end:increment { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 12L4 8h8z" fill="black"/></svg>'); }
        `}</style>
      )}

      <View style={styles.windowFrame}>
        
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Home Page :3c</Text>
          <Pressable style={styles.closeButton} onPress={handleAppCloseAttempt}>
            <Text style={styles.closeText}>X</Text>
          </Pressable>
        </View>

        <View style={styles.toolbarContainer}>
          <View style={styles.menuRow}>
            <Text style={styles.menuText}><Text style={styles.underline}>F</Text>ile</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>E</Text>dit</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>V</Text>iew</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>G</Text>o</Text>
            <Text style={styles.menuText}>F<Text style={styles.underline}>a</Text>vorites</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>H</Text>elp</Text>
          </View>
          
          <View style={styles.addressRow}>
            <Text style={styles.addressLabel}>Address</Text>
            <View style={styles.addressInput}>
              <Text style={styles.addressInputText}>https://hihihihihihihihihihihihihihihihihi.com</Text>
            </View>
          </View>
        </View>

        <View style={styles.webpageBody}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>
            
            <View style={styles.headerRow}>
              <Image 
                source={require('../assets/images/logopicture2.gif')} 
                style={[styles.webButton, { imageRendering: 'pixelated' } as any]}
              />
              <Image 
                source={require('../assets/images/hello.gif')} 
                style={[styles.spinnyImage, { imageRendering: 'pixelated' } as any]} 
              />
              
              <Text style={styles.headerText}>Greetings! \(^-^)/</Text>

              <Image 
                source={require('../assets/images/hello2.gif')} 
                style={[styles.spinnyImage, { imageRendering: 'pixelated' } as any]} 
              />
              <Image 
                source={require('../assets/images/manabinogi.gif')} 
                style={[styles.webButton, { imageRendering: 'pixelated' } as any]}
              />
            </View>

            <Text style={styles.bodyText}>
              Hello! Welcome Welcome :) You might be wondering "what the hecky is this site" but fear not stranger! This was something I made to practice/learn about nonsnese while I wanted to make an update carrd, but this time for me and not my character ^_^
              Disclaimer: The longer you read this, the longer you might question your life choices and decisions that lead you up to this moment. I am not liable for any lost brain cells or something tragic that manages to somehow magically points back to this website.
              P.S. Only cool people are allowed here. If you're uncool or even worse... if you're one of my opps, then bye bye (Ok uncool people can stay, just not any of my opps OR IF YOU'RE HIM!!!!1!!!!1!!!!!!!!! ) o/ P.S. you are obligated to have fun and enjoy yourselves (allegedly of course) on your time on my personal and memorizing (I hope) website, and if you don't have fun or a good time, then idk what to tell you @.@
              
            </Text>

            <Image 
              source={require('../assets/images/runningcat1.gif')} 
              style={[styles.runningCat, { imageRendering: 'pixelated' } as any]}
            />
            
          </ScrollView>
        </View>
      </View>

      <Modal visible={showCatModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.dialogWindow}>
            
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>SYSTEM_OVERRIDE.exe</Text>
              <Pressable style={styles.closeButton} onPress={() => setShowCatModal(false)}>
                <Text style={styles.closeText}>X</Text>
              </Pressable>
            </View>

            <View style={styles.dialogBody}>
              <View style={styles.catImageWrapper}>
                <Image 
                  source={CAT_PHOTOS[currentCatIndex]} 
                  style={styles.catImage} 
                  resizeMode="contain" 
                />
              </View>
              <View style={styles.dialogActionRow}>
                <Pressable style={styles.modalButton} onPress={() => setShowCatModal(false)}>
                  <Text style={styles.win95ButtonText}>OK</Text>
                </Pressable>
              </View>
            </View>

          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15 },
  windowFrame: { width: '100%', maxWidth: 600, maxHeight: '85%', borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', backgroundColor: '#c0c0c0' },
  titleBar: { backgroundColor: '#000080', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 4, paddingVertical: 4 },
  titleText: { color: '#ffffff', fontFamily: 'W95FA', fontWeight: 'bold', marginLeft: 4 },
  closeButton: { backgroundColor: '#c0c0c0', paddingHorizontal: 6, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040' },
  closeText: { color: '#000', fontFamily: 'W95FA', fontWeight: 'bold' },
  toolbarContainer: { backgroundColor: '#c0c0c0', paddingHorizontal: 4, paddingBottom: 6, borderBottomWidth: 1, borderBottomColor: '#808080' },
  menuRow: { flexDirection: 'row', paddingVertical: 6 },
  menuText: { fontFamily: 'W95FA', color: '#000', marginRight: 15 },
  underline: { textDecorationLine: 'underline' },
  addressRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  addressLabel: { fontFamily: 'W95FA', color: '#000', marginRight: 10 },
  addressInput: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 6, paddingVertical: 4, borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff' },
  addressInputText: { fontFamily: 'W95FA', color: '#000' },
  webpageBody: { flex: 1, backgroundColor: '#ffffff', borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', margin: 4 },
  scrollContent: { alignItems: 'center', padding: 10, paddingBottom: 15 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20, gap: 8 },
  spinnyImage: { width: 48, height: 48 },
  headerText: { color: '#240835', fontFamily: 'W95FA', fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  bodyText: { color: '#000000', fontFamily: 'W95FA', fontSize: 14, textAlign: 'center', lineHeight: 22, marginBottom: 30 },
  webButton: { width: 88, height: 31 },
  runningCat: { marginBottom: 10 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  dialogWindow: { width: '90%', maxWidth: 450, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', backgroundColor: '#c0c0c0' },
  dialogBody: { padding: 15 },
  catImageWrapper: { alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', backgroundColor: '#000', height: 300 },
  catImage: { width: '100%', height: '100%' },
  dialogActionRow: { flexDirection: 'row', justifyContent: 'flex-end' },
  modalButton: { width: 80, backgroundColor: '#c0c0c0', paddingVertical: 4, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', alignItems: 'center' },
  win95ButtonText: { fontFamily: 'W95FA', fontWeight: 'bold', color: '#000' }
});