import { useState } from 'react';
import { Image, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const DRAWING_LIST = [
  require('../assets/drawings/1.png'),
  require('../assets/drawings/2.png'),
  require('../assets/drawings/3.png'),
  require('../assets/drawings/4.png'),
  require('../assets/drawings/5.png'),
  require('../assets/drawings/6.png'),
  require('../assets/drawings/7.png'),
  require('../assets/drawings/8.png'),
];

export default function Shrine() {
  const [activeDrawing, setActiveDrawing] = useState<any>(null);

  return (
    <View style={styles.pageContainer}>
      
      {Platform.OS === 'web' && (
        <style>{`
          *::-webkit-scrollbar { width: 16px; background: #dfdfdf; }
          *::-webkit-scrollbar-thumb { background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #000000; border-right: 2px solid #000000; }
          *::-webkit-scrollbar-thumb:active { border-top: 2px solid #000000; border-left: 2px solid #000000; border-bottom: 2px solid #ffffff; border-right: 2px solid #ffffff; }
          *::-webkit-scrollbar-button { display: block; background-color: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #000000; border-right: 2px solid #000000; background-repeat: no-repeat; background-position: center; height: 16px; width: 16px; }
          *::-webkit-scrollbar-button:active { border-top: 2px solid #000000; border-left: 2px solid #000000; border-bottom: 2px solid #ffffff; border-right: 2px solid #ffffff; }
          *::-webkit-scrollbar-button:start:increment,
          *::-webkit-scrollbar-button:end:decrement { display: none; }
          *::-webkit-scrollbar-button:start:decrement { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 4L4 8h8z" fill="black"/></svg>'); }
          *::-webkit-scrollbar-button:end:increment { background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 12L4 8h8z" fill="black"/></svg>'); }
        `}</style>
      )}

      <View style={styles.windowFrame}>
        
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>C:\ART_GALLERY</Text>
          <View style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </View>
        </View>

        <View style={styles.toolbarContainer}>
          <View style={styles.menuRow}>
            <Text style={styles.menuText}><Text style={styles.underline}>F</Text>ile</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>E</Text>dit</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>V</Text>iew</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>T</Text>ools</Text>
            <Text style={styles.menuText}>F<Text style={styles.underline}>o</Text>lder</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>W</Text>indow</Text>
            <Text style={styles.menuText}><Text style={styles.underline}>H</Text>elp</Text>
          </View>
        </View>

        <View style={styles.explorerBody}>
          <ScrollView style={styles.scrollArea} contentContainerStyle={styles.galleryGrid}>
            
            {DRAWING_LIST.map((imageAsset, index) => (
              <Pressable 
                key={index} 
                style={styles.fileContainer} 
                onPress={() => setActiveDrawing(imageAsset)}
              >
                <View style={styles.iconWrapper}>
                  <Image 
                    source={imageAsset} 
                    style={[styles.fileIcon, { imageRendering: 'pixelated' } as any]} 
                    resizeMode="cover"
                  />
                </View>
                <Text style={styles.fileText}>art_{index + 1}.png</Text>
              </Pressable>
            ))}

          </ScrollView>
        </View>

        <View style={styles.statusBar}>
          <View style={styles.statusBox}>
            <Text style={styles.statusText}>{DRAWING_LIST.length} Object(s) in Folder.</Text>
          </View>
        </View>

      </View>

      <Modal visible={activeDrawing !== null} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          
          <View style={styles.modalWindow}>
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>ImageViewer.exe</Text>
              <Pressable style={styles.closeButton} onPress={() => setActiveDrawing(null)}>
                <Text style={styles.closeText}>X</Text>
              </Pressable>
            </View>

            <View style={styles.modalBody}>
              {activeDrawing && (
                <Image 
                  source={activeDrawing} 
                  style={[styles.fullSizeImage, { imageRendering: 'pixelated' } as any]} 
                  resizeMode="contain" 
                />
              )}
            </View>
          </View>

        </View>
      </Modal>

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
    maxWidth: 700,
    height: '85%', 
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
    paddingBottom: 2,
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
  underline: {
    textDecorationLine: 'underline',
  },
  explorerBody: {
    flex: 1,
    backgroundColor: '#ffffff', 
    borderWidth: 2,
    borderTopColor: '#808080',
    borderLeftColor: '#808080',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
    marginHorizontal: 4,
    marginBottom: 4,
  },
  scrollArea: {
    flex: 1,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'flex-start',
    padding: 15,
    gap: 20, 
  },
  fileContainer: {
    alignItems: 'center',
    width: 80,
    marginBottom: 10,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0c0c0',
    borderWidth: 2,
    borderTopColor: '#808080',
    borderLeftColor: '#808080',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
  },
  fileIcon: {
    width: 48,
    height: 48,
  },
  fileText: {
    fontFamily: 'W95FA',
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
  },
  statusBar: {
    height: 24,
    backgroundColor: '#c0c0c0',
    paddingHorizontal: 4,
    paddingBottom: 4,
    justifyContent: 'center',
  },
  statusBox: {
    flex: 1,
    borderWidth: 1,
    borderTopColor: '#808080',
    borderLeftColor: '#808080',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  statusText: {
    fontFamily: 'W95FA',
    fontSize: 12,
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalWindow: {
    width: '100%',
    maxWidth: 500,
    borderWidth: 2,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
    backgroundColor: '#c0c0c0',
  },
  modalBody: {
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  fullSizeImage: {
    width: '100%',
    height: 400, 
    borderWidth: 2,
    borderTopColor: '#808080',
    borderLeftColor: '#808080',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
    backgroundColor: '#000', 
  },
});