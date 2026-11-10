import { CdMusic, Computer, Earth, Folder, Joy110, Notepad } from '@react95/icons';
import { useState } from 'react';
import { Image, Linking, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const SOCIAL_LINKS = {
  steam: 'https://steamcommunity.com/id/mikyiu/',
  twitch: 'https://www.twitch.tv/ililililiillliilll',
  twitter: 'https://twitter.com/llIIIllIIIlIIl',
  spotify: 'https://open.spotify.com/user/dtoqp0lsauv7oklg9q66z9yiz',
  ffxiv: 'https://4lines.carrd.co/',
};

const CAT_PHOTOS = [
  require('../assets/cats/cat1.png'),
  require('../assets/cats/cat2.png'),
  require('../assets/cats/cat3.png'),
  require('../assets/cats/cat4.png'),
];

export default function Socials() {
  const [showCatModal, setShowCatModal] = useState(false);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);

  const handleAppCloseAttempt = () => {
    const randomCat = Math.floor(Math.random() * CAT_PHOTOS.length);
    setCurrentCatIndex(randomCat);
    setShowCatModal(true);
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open link:", err));
  };

  return (
    <View style={styles.pageContainer}>
      
      {Platform.OS === 'web' && (
        <style>{`
          body, * { cursor: url('/cursor.cur'), auto !important; }
          a, button, [role="button"] { cursor: url('/pointer.cur'), pointer !important; }
        `}</style>
      )}

      <View style={styles.windowFrame}>
        
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>C:\CURSED_LINKS</Text>
          <Pressable style={styles.closeButton} onPress={handleAppCloseAttempt}>
            <Text style={styles.closeText}>X</Text>
          </Pressable>
        </View>

        <View style={styles.toolbarContainer}>
          <View style={styles.menuRow}>
            <Text style={styles.menuText}><Text style={styles.underline}>F</Text>ile</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>E</Text>dit</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>V</Text>iew</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>H</Text>elp</Text>
          </View>
          
          <View style={styles.addressBarRow}>
            <Text style={styles.addressLabel}>Address</Text>
            <View style={styles.addressInputWrapper}>
              <View style={styles.addressInputBox}>
                <Folder variant="16x16_4" style={{ width: 14, height: 14, marginRight: 4 }} />
                <Text style={styles.addressText} numberOfLines={1}>C:\DU_NUOT_KLIK_OK</Text>
              </View>
              <View style={styles.dropdownButton}>
                <Text style={styles.dropdownArrow}>▼</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.explorerBody}>
          
          <View style={styles.headerRow}>
            <Image 
              source={require('../assets/images/smile.gif')} 
              style={[styles.smallWebButton, { imageRendering: 'pixelated' } as any]}
            />
            <Image 
              source={require('../assets/images/zanarkand.gif')} 
              style={[styles.smallWebButton, { imageRendering: 'pixelated' } as any]}
            />
            
            <Text style={styles.headerText}>TOP SECRET NO STALKING {'>'}:(</Text>

            <Image 
              source={require('../assets/images/nec.gif')} 
              style={[styles.smallWebButton, { imageRendering: 'pixelated' } as any]}
            />
            <Image 
              source={require('../assets/images/award.gif')} 
              style={[styles.smallWebButton, { imageRendering: 'pixelated' } as any]}
            />
          </View>
          
          <View style={styles.standaloneRow}>
            <Image 
              source={require('../assets/images/new-tab.gif')} 
              style={[styles.webButton, { imageRendering: 'pixelated' } as any]}
            />
          </View>
          
          <View style={styles.listContainer}>
            
            <Pressable onPress={() => openLink(SOCIAL_LINKS.steam)}>
              {({ pressed }) => (
                <View style={styles.listItem}>
                  <Joy110 variant="32x32_4" style={styles.listIcon} />
                  <Text style={[styles.listLabel, pressed && styles.listLabelSelected]}>Steam</Text>
                </View>
              )}
            </Pressable>

            <Pressable onPress={() => openLink(SOCIAL_LINKS.twitch)}>
              {({ pressed }) => (
                <View style={styles.listItem}>
                  <Computer variant="32x32_4" style={styles.listIcon} />
                  <Text style={[styles.listLabel, pressed && styles.listLabelSelected]}>Twitch</Text>
                </View>
              )}
            </Pressable>

            <Pressable onPress={() => openLink(SOCIAL_LINKS.twitter)}>
              {({ pressed }) => (
                <View style={styles.listItem}>
                  <Earth variant="32x32_4" style={styles.listIcon} />
                  <Text style={[styles.listLabel, pressed && styles.listLabelSelected]}>Twitter</Text>
                </View>
              )}
            </Pressable>

            <Pressable onPress={() => openLink(SOCIAL_LINKS.spotify)}>
              {({ pressed }) => (
                <View style={styles.listItem}>
                  <CdMusic variant="32x32_4" style={styles.listIcon} />
                  <Text style={[styles.listLabel, pressed && styles.listLabelSelected]}>Spotify</Text>
                </View>
              )}
            </Pressable>

            <Pressable onPress={() => openLink(SOCIAL_LINKS.ffxiv)}>
              {({ pressed }) => (
                <View style={styles.listItem}>
                  <Notepad variant="32x32_4" style={styles.listIcon} />
                  <Text style={[styles.listLabel, pressed && styles.listLabelSelected]}>FFXIV Carrd</Text>
                </View>
              )}
            </Pressable>

          </View>
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
  windowFrame: { width: '100%', maxWidth: 600, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', backgroundColor: '#c0c0c0', marginBottom: 40 },
  titleBar: { backgroundColor: '#000080', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 4, paddingVertical: 4 },
  titleText: { color: '#ffffff', fontFamily: 'W95FA', fontWeight: 'bold', marginLeft: 4 },
  closeButton: { backgroundColor: '#c0c0c0', paddingHorizontal: 6, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040' },
  closeText: { color: '#000', fontFamily: 'W95FA', fontWeight: 'bold' },
  toolbarContainer: { backgroundColor: '#c0c0c0', paddingHorizontal: 4, paddingBottom: 6 },
  menuRow: { flexDirection: 'row', paddingVertical: 6 },
  menuText: { fontFamily: 'W95FA', color: '#000', marginRight: 15 },
  underline: { textDecorationLine: 'underline' },
  addressBarRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4, paddingTop: 4, borderTopWidth: 1, borderTopColor: '#ffffff' },
  addressLabel: { fontFamily: 'W95FA', color: '#000', marginRight: 8, fontSize: 12 },
  addressInputWrapper: { flex: 1, flexDirection: 'row', height: 24 },
  addressInputBox: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', paddingHorizontal: 4 },
  addressText: { fontFamily: 'W95FA', color: '#000', fontSize: 12 },
  dropdownButton: { width: 18, backgroundColor: '#c0c0c0', borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', justifyContent: 'center', alignItems: 'center', marginLeft: 2 },
  dropdownArrow: { fontSize: 8, color: '#000' },
  explorerBody: { backgroundColor: '#ffffff', borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', marginHorizontal: 4, marginBottom: 4, padding: 20, minHeight: 200 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10, gap: 6, flexWrap: 'wrap' },
  standaloneRow: { alignItems: 'center', justifyContent: 'center', marginBottom: 25 },
  smallWebButton: { width: 75, height: 26 },
  webButton: { width: 88, height: 31 },
  headerText: { fontFamily: 'W95FA', fontSize: 14, color: '#000', textAlign: 'center' },
  listContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 25, justifyContent: 'center' },
  listItem: { alignItems: 'center', width: 80 },
  listIcon: { width: 32, height: 32, marginBottom: 8 },
  listLabel: { fontFamily: 'W95FA', fontSize: 12, color: '#000', textAlign: 'center', paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderColor: 'transparent' },
  listLabelSelected: { backgroundColor: '#000080', color: '#ffffff', borderColor: '#ffffff', borderStyle: 'dotted' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  dialogWindow: { width: '90%', maxWidth: 450, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', backgroundColor: '#c0c0c0' },
  dialogBody: { padding: 15 },
  catImageWrapper: { alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', backgroundColor: '#000', height: 300 },
  catImage: { width: '100%', height: '100%' },
  dialogActionRow: { flexDirection: 'row', justifyContent: 'flex-end' },
  modalButton: { width: 80, backgroundColor: '#c0c0c0', paddingVertical: 4, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', alignItems: 'center' },
  win95ButtonText: { fontFamily: 'W95FA', fontWeight: 'bold', color: '#000' }
});