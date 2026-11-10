import { useEffect, useState } from 'react';
import { FlatList, Image, Modal, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../supabase';

const CHARACTER_LIMIT = 480;

const BANNED_WORDS = [
  'crap',
  'heck',
  'darn',
  'idiot',
  '555-0199',
];

const CAT_PHOTOS = [
  require('../assets/cats/cat1.png'),
  require('../assets/cats/cat2.png'),
  require('../assets/cats/cat3.png'),
  require('../assets/cats/cat4.png'),
];

const censorText = (text: string) => {
  const regex = new RegExp(`\\b(${BANNED_WORDS.join('|')})\\b`, 'gi');
  return text.replace(regex, '[CENSORED]'); 
};

export default function Guestbook() {
  const [inputText, setInputText] = useState('');
  const [inputName, setInputName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // Easter Egg State
  const [showCatModal, setShowCatModal] = useState(false);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);
  
  const [messages, setMessages] = useState<any[]>([]);
  
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(69);

    if (error) {
      console.error('Error fetching messages:', error);
    } else if (data) {
      const formattedMessages = data.map((msg: any) => {
        const dateObj = new Date(msg.created_at);
        return {
          id: msg.id,
          name: msg.name,
          text: msg.text,
          date: `${dateObj.toLocaleDateString()} at ${dateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`,
          canDelete: false 
        };
      });
      setMessages(formattedMessages);
    }
  };

  const handleSignGuestbook = async () => {
    const trimmedInput = inputText.trim();
    if (trimmedInput.length === 0) return;

    const cleanText = censorText(trimmedInput);
    const finalName = inputName.trim().length > 0 ? inputName.trim() : 'Anonymous Visitor';

    const tempId = Date.now().toString();
    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} at ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;

    const newMessage = {
      id: tempId,
      name: finalName,
      text: cleanText,
      date: timestamp,
      canDelete: true,
    };

    setMessages((prevMessages) => [newMessage, ...prevMessages].slice(0, 69));
    
    setIsModalVisible(false);
    setInputText('');
    setInputName('');

    const { error } = await supabase
      .from('guestbook')
      .insert([{ name: finalName, text: cleanText }]);

    if (error) {
      console.error('Error inserting message:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setInputText('');
    setInputName('');
  };

  const handleDeleteMessage = (idToRemove: string) => {
    setMessages((prevMessages) => prevMessages.filter(msg => msg.id !== idToRemove));
  };

  const handleAppCloseAttempt = () => {
    const randomCat = Math.floor(Math.random() * CAT_PHOTOS.length);
    setCurrentCatIndex(randomCat);
    setShowCatModal(true);
  };

  return (
    <View style={styles.pageContainer}>
      
      <View style={styles.windowFrame}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>GUESTBOOK.exe</Text>
          <Pressable style={styles.closeButton} onPress={handleAppCloseAttempt}>
            <Text style={styles.closeText}>X</Text>
          </Pressable>
        </View>

        <View style={styles.explorerBody}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Public Message Board:</Text>
            <Pressable style={styles.win95Button} onPress={() => setIsModalVisible(true)}>
              <Text style={styles.win95ButtonText}>Sign Book...</Text>
            </Pressable>
          </View>

          <View style={styles.messageListContainer}>
            <FlatList
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.messageCard}>
                  <View style={styles.messageHeader}>
                    <View style={styles.messageAuthorRow}>
                      <Text style={styles.messageName}>{item.name}</Text>
                      <Text style={styles.messageDate}>{item.date}</Text>
                    </View>
                    
                    {item.canDelete && (
                      <Pressable style={styles.deleteButton} onPress={() => handleDeleteMessage(item.id)}>
                        <Text style={styles.deleteText}>X</Text>
                      </Pressable>
                    )}
                    
                  </View>
                  <Text style={styles.messageText}>{item.text}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>

      {/* Guestbook Signing Modal */}
      <Modal
        animationType="none"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.dialogWindow}>
            
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>New Message</Text>
              <Pressable style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeText}>X</Text>
              </Pressable>
            </View>

            <View style={styles.dialogBody}>
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={styles.singleLineInput}
                placeholder="Anonymous Visitor"
                placeholderTextColor="#808080"
                value={inputName}
                onChangeText={setInputName}
                maxLength={30}
              />

              <Text style={styles.label}>Message:</Text>
              <TextInput
                style={styles.multiLineInput}
                multiline
                numberOfLines={5}
                maxLength={CHARACTER_LIMIT}
                value={inputText}
                onChangeText={setInputText}
              />
              
              <Text style={styles.charCount}>
                {inputText.length} / {CHARACTER_LIMIT} characters
              </Text>

              <View style={styles.disclaimerBox}>
                <Text style={styles.disclaimerText}>
                  CRITICAL WARNING: THIS IS A PUBLIC MESSAGE BOARD!!!! NO HATE, NO RACISM, NO MEAN COMMENTS, NO PERSONAL INFORMATION, NO IMPERSONATIONS, AND ABSOLUTELY NO MENTIONING ME AS A FEMBOY! (Or do, good things will come if you call me a femboy, I dare you :) Teehee) but honestly, just use your brain and be respectful :) Oh and try not to spam please ♥{'\n\n'}P.S. Make sure you want to post what you actually want to post, there's like a limited amount of time before it stays there perm, and if you want something deleted afterwards, then I'd have to delete it, and I'm super lazy @.@
                </Text>
              </View>

              <View style={styles.dialogActionRow}>
                <Pressable 
                  style={StyleSheet.flatten([styles.win95Button, styles.dialogButton, inputText.trim().length === 0 && styles.buttonDisabled])} 
                  onPress={handleSignGuestbook}
                  disabled={inputText.trim().length === 0}
                >
                  <Text style={styles.win95ButtonText}>OK</Text>
                </Pressable>
                <Pressable style={[styles.win95Button, styles.dialogButton]} onPress={handleCloseModal}>
                  <Text style={styles.win95ButtonText}>Cancel</Text>
                </Pressable>
              </View>
            </View>

          </View>
        </View>
      </Modal>

      {/* Secret Cat Modal */}
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
  windowFrame: { width: '100%', maxWidth: 600, maxHeight: 700, flex: 1, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', backgroundColor: '#c0c0c0', marginBottom: 40 },
  titleBar: { backgroundColor: '#000080', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 4, paddingVertical: 4 },
  titleText: { color: '#ffffff', fontFamily: 'W95FA', fontWeight: 'bold', marginLeft: 4 },
  closeButton: { backgroundColor: '#c0c0c0', paddingHorizontal: 6, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040' },
  closeText: { color: '#000', fontFamily: 'W95FA', fontWeight: 'bold' },
  explorerBody: { flex: 1, backgroundColor: '#c0c0c0', padding: 15 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  headerText: { fontFamily: 'W95FA', fontSize: 14, color: '#000' },
  win95Button: { backgroundColor: '#c0c0c0', paddingHorizontal: 15, paddingVertical: 4, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', alignItems: 'center', justifyContent: 'center' },
  win95ButtonText: { fontFamily: 'W95FA', fontWeight: 'bold', color: '#000' },
  buttonDisabled: { opacity: 0.6 },
  messageListContainer: { flex: 1, backgroundColor: '#ffffff', borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: 10 },
  messageCard: { borderBottomWidth: 1, borderBottomColor: '#dfdfdf', paddingBottom: 10, marginBottom: 10 },
  messageHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 },
  messageAuthorRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', flex: 1, paddingRight: 10 },
  messageName: { fontFamily: 'W95FA', fontWeight: 'bold', color: '#000080', marginRight: 8 },
  messageDate: { fontFamily: 'W95FA', fontSize: 11, color: '#808080' },
  deleteButton: { backgroundColor: '#c0c0c0', paddingHorizontal: 5, paddingVertical: 1, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', marginLeft: 8, marginTop: 2 },
  deleteText: { fontFamily: 'W95FA', fontSize: 10, color: '#000', fontWeight: 'bold' },
  messageText: { fontFamily: 'W95FA', fontSize: 13, color: '#000' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  dialogWindow: { width: '90%', maxWidth: 450, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', backgroundColor: '#c0c0c0' },
  dialogBody: { padding: 15 },
  label: { fontFamily: 'W95FA', fontSize: 12, color: '#000', marginBottom: 4 },
  singleLineInput: { backgroundColor: '#ffffff', borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: 6, fontFamily: 'W95FA', fontSize: 14, color: '#000', marginBottom: 12, ...(Platform.OS === 'web' && { outlineStyle: 'none' as any }) },
  multiLineInput: { backgroundColor: '#ffffff', borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: 8, fontFamily: 'W95FA', fontSize: 14, color: '#000', height: 100, textAlignVertical: 'top', marginBottom: 4, ...(Platform.OS === 'web' && { outlineStyle: 'none' as any }) },
  charCount: { fontFamily: 'W95FA', fontSize: 11, color: '#000', textAlign: 'right', marginBottom: 12 },
  disclaimerBox: { backgroundColor: '#ffffe1', borderWidth: 1, borderColor: '#000', padding: 8, marginBottom: 15 },
  disclaimerText: { fontFamily: 'W95FA', fontSize: 11, color: '#000', lineHeight: 14 },
  dialogActionRow: { flexDirection: 'row', justifyContent: 'flex-end', gap: 10 },
  dialogButton: { minWidth: 80 },
  catImageWrapper: { alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', backgroundColor: '#000', height: 300 },
  catImage: { width: '100%', height: '100%' },
  modalButton: { width: 80, backgroundColor: '#c0c0c0', paddingVertical: 4, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', alignItems: 'center' },
});