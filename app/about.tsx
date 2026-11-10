import { useState } from 'react';
import { Image, Linking, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const CAT_PHOTOS = [
  require('../assets/cats/cat1.png'),
  require('../assets/cats/cat2.png'),
  require('../assets/cats/cat3.png'),
  require('../assets/cats/cat4.png'),
];

export default function About() {
  const [showCatModal, setShowCatModal] = useState(false);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);

  const handleAppCloseAttempt = () => {
    const randomCat = Math.floor(Math.random() * CAT_PHOTOS.length);
    setCurrentCatIndex(randomCat);
    setShowCatModal(true);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date('2000-10-22');
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) { age--; }
    return age;
  };

  const currentAge = calculateAge();

  return (
    <View style={styles.pageContainer}>
      {Platform.OS === 'web' && (
        <style>{`
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
          <Text style={styles.titleText}>ABOUT_ME.TXT - Notepad</Text>
          <Pressable style={styles.closeButton} onPress={handleAppCloseAttempt}>
            <Text style={styles.closeText}>X</Text>
          </Pressable>
        </View>

        <View style={styles.menuRow}>
          <Text style={styles.menuText}>File</Text>
          <Text style={styles.menuText}>Edit</Text>
          <Text style={styles.menuText}>Search</Text>
          <Text style={styles.menuText}>Help</Text>
        </View>

        <View style={styles.notepadBody}>
          <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
            
            <View style={styles.headerContainer}>
              <Image source={require('../assets/images/question.gif')} style={{ width: 48, height: 48, marginRight: 10, imageRendering: 'pixelated' } as any} />
              <Text style={styles.headerText}>WHOAMI.EXE</Text>
            </View>
            
            <Text style={styles.bodyText}>
              Entity known as "Eric". Other aliases include: Mikyiu, Illl Illl, Barcode, Smiley Face, Star, and of course Princess! (Don't ask)
            </Text>

            <View style={styles.listContainer}>
              <View style={styles.listItem}><Text style={styles.bullet}>&gt;</Text><Text style={styles.listText}>Age: {currentAge}</Text></View>
              <View style={styles.listItem}><Text style={styles.bullet}>&gt;</Text><Text style={styles.listText}>Location: Planet Earth. Just Kidding I'm in Washington State! </Text></View>
              <View style={styles.listItem}><Text style={styles.bullet}>&gt;</Text><Text style={styles.listText}>IQ: It fluctuates!  </Text></View>
              <View style={styles.listItem}><Text style={styles.bullet}>&gt;</Text><Text style={styles.listText}>Alignment: Lawful Neutral but my Heart is Chaotic Evil :] </Text></View>
              <View style={styles.listItem}><Text style={styles.bullet}>&gt;</Text><Text style={styles.listText}>Despite popular beleifs, I am super shy and reserved in real life. I want to hide in a shell and never come out, especially when talking to strangers @.@ but of course I'm a totally different sailor moon character or something I don't know it's 2 AM when I wrote this </Text></View>
              <View style={styles.listItem}><Text style={styles.bullet}>&gt;</Text><Text style={styles.listText}>Favorite Games: Born to play: Poptropica, Club Penguin, Those random Flash games (I love u Unblocked Games) and of course FunBrain, Force to play: Genshin Imapct, FFXIV, Minecraft, and of course OverMeme :(  </Text></View>
              <View style={styles.listItem}><Text style={styles.bullet}>&gt;</Text><Text style={styles.listText}>Likes: Geeking out on hardware, Drama (The good type of course), Dorks and being called a dork, Sweets, Pizza, My friends, Puns...like Really REALLY BAD puns hehe, Being embarassed :3, and you of course :blush: </Text></View>
              <View style={styles.listItem}><Text style={styles.bullet}>&gt;</Text><Text style={styles.listText}>Dislikes: Drama (The bad type of course), Soul-sucking leeches, Conflict, Toxic and mean people :(  </Text></View>
            </View>

            <View style={styles.faqHeaderContainer}>
              <Image source={require('../assets/images/ballooncato.gif')} style={{ width: 64, height: 64, marginRight: 10, imageRendering: 'pixelated', resizeMode: 'contain' } as any} />
              <Text style={styles.headerText}>F.A.Q.</Text>
            </View>

            <Text style={styles.questionText}>Q: What is the meaning of this site?</Text>
            <Text style={styles.answerText}>A: That's a good question. My answer is memes :) & for you to learn a lot more about me! I'm not good with words, so I hope my actions can help you learn more about me!  </Text>

            <Text style={styles.questionText}>Q: Are you a robot?</Text>
            <Text style={styles.answerText}>A: I fail CAPTCHAs on purpose (totally) to keep them guessing.</Text>

            <Text style={styles.questionText}>Q: Are you a femboy?</Text>
            <Text style={styles.answerText}>A: NO ABSOLUTELY NOT! I AM BEATING THESE ALLEGATIONS THANK YOU VERY MUCH</Text>

            <Text style={styles.questionText}>Q: Where are you located Exactly?</Text>
            <Text style={styles.answerText}>A: In the milky way galaxy, there's a planet in a solar system called Earth. There is a place with at least four walls, one of them has me in it! Hope that helps ^_^  </Text>

            <Text style={styles.questionText}>Q: Why do you have so many hours on Mercy?!</Text>
            <Text style={styles.answerText}>A: I originally did it to prove to my arch nemesis at the time that I was the better mercy player. Now... it's too late to back down now. LOL</Text>

            <Text style={styles.questionText}>Q: Do you like being used as a chair?</Text>
            <Text style={styles.answerText}>A: Why Yes I do :D.</Text>

            <Text style={styles.questionText}>Q: How Tall are you?</Text>
            <Text style={styles.answerText}>A: 5ft10 but on paper if we use math technically Acktually 6ft 1 (Cope).</Text>

            <Text style={styles.questionText}>Q: What's your biggest weakness?</Text>
            <Text style={styles.answerText}>A: A Box of Pepperoni Pizza and chocolate milkshake with fries. While we're at it, Chocolate chip cookies, and chocolate cake mmmmmmmmmmm.</Text>

            <Text style={styles.questionText}>Q: Where would you want to travel to the most?</Text>
            <Text style={styles.answerText}>A: That's a good question. If I had to stay in the States, I'd love to visit some major cities in California =v= (San Francisco, San Diego, Los Angeles, etc) but overall, I want to travel the world. In no order I'd visit Toronto, Vancouver B.C., Melbourne Australia, Tokyo Japan, Seoul South Korea, Jakarta Indonesia, Singapore, Quezon City, Mae Hong Son Thailand, Chiang Mai Thailand, and Auckland New Zealand!  </Text>

            <Text style={styles.questionText}>Q: Where do you find these gifs?</Text>
            <Text style={styles.answerText}>A: At Gifcities ^_^</Text>

            <Text style={styles.questionText}>Q: (MOST POPULAR FOR SOME REASON) Do you enjoy being used as a urinal?</Text>
            <Text style={styles.answerText}>A: OMFG WHY DOES THIS QUESTION KEEP POPPING UP FIRST THESE FEMBOY ALLEGATIONS AND NOW THIS, I'M ACTUALLY SO MALDING RIGHT NOW I'M LIKE SO MALDING LIKE I'M ACTUALLY MALDING LIKE GUYS AND GALS I SINGLEHANDLEDLY DONE THE CALCULATIONS AND LIKE STUDIED UPON HOURS UPON HOURS IN THE LABATORY AND LIKE DISECTED AS THE TEST SUBJECT MY OWN SELF AND THROUGH EFFORT HOURS OF THE TOP HIGHEST QUALITY OF SCIENTIFIC RESEARCH KNOWN TO HUMAN-KIND ON THE INTERNET, THE BOOKS, AND DOWN IN THE TEST-SUBJECT-ZONE-AREA-THINGY... did i mention hours? I did good! anyways, AFTER ALL THAT TIME AND EFFORT.....uhhhhhhhhhhhhh what was I typing again? I honestly can't remember what I was talking about, and like but like, I'm totally zoomed in and like I really honestly can't remember what I was talking about......was it about books? was it about cake? I love cake. The type you eat of course. Consum(er)able cake is friendly cake! :D You know my graduation cake was a box, a small box inside of a bigger box of cake. It was good cake mmmmmmm I love cake. You should buy me cake to bribe me, I'm easily bribed with cake, it is tasty and sweet like chocolate! Espc the kit-kats (more like kit-kat-koe ammiright hahaha), anyways I think I remembered what I was talking about oh yes....it's about the kitten allegations, well they're true, I do meow for free. I'm sorry you had to find out about this. I am truly sorry for the 3 people who saw me as a non-meowing  ̶F̶E̶M̶ Cool SWAGALIOUS boy. It will happen again. Thank you for your understanding I appreciate you. Meow :3c </Text>

            <Text style={styles.questionText}>Q: Care to address the Kitten allegations?</Text>
            <Text style={styles.answerText}>A: Baseless and lies, I would never meow for free! I'd at least charge 2 cents tyvm, you know like a proper good boy cat. Especially the Tuxedo good boys, now that's me!</Text>

            <Text style={styles.questionText}>Q: Why do you like saying TERRIBLE PUNS?!</Text>
            <Text style={styles.answerText}>A: They make me smile :D + I Enjoy the physical eye rolling it provides hehe</Text>

            <Text style={styles.questionText}>Q: Biggest fears?</Text>
            <Text style={styles.answerText}>A: Water, which includes swimming pools, and the ocean... and bees @.@ maybe spiders and maybe bugs, and angry people make me afraid the most @.@</Text>
            
            <Text style={styles.questionText}>Q: Favorite Anime?</Text>
            <Text style={styles.answerText}>A: Nyan Neko Sugar Girls :3 I also LOVE Cheesy ROMCOMS! By That, I mean the ones that you see on YouTube! My favorite ones are: for the classic cheesy romance romcoms (all-time favorites): Sarubedo RomCom Mangas, Kanon's RomCom Mangas, & Kawaii RomCom Mangas. For the typical revenge romcoms, I watch AoHaru Manga Library, Runa's RomCom Mangas, & Hana's Romance Journal. But my all time favorite for the two is lovekoi manga because the stories incorperate a love story in the middle, and not as a after thought! What can I say, I'm a sucker for cheesy love stories =w=    </Text>

            <Text style={styles.questionText}>Q: how many songs is acceptable to have as favorite?</Text>
            <Text style={styles.answerText}>A: 999999. What are mine? Scroll down :] (also my spotify is somewhere here if you truly want to know my music taste) </Text>

            <View style={[styles.faqHeaderContainer, { marginTop: 20 }]}>
              <Image source={require('../assets/images/wink.gif')} style={{ width: 48, height: 48, marginRight: 10, imageRendering: 'pixelated', resizeMode: 'contain' } as any} />
              <Text style={styles.headerText}>TOP 16 SWAGALIOUS SONGS! (# 1 may shock you!)</Text>
            </View>
            
            <View style={styles.listContainer}>
              <View style={styles.listItem}><Text style={styles.bullet}>1.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=VMStKtXO4A8')}><Text style={styles.linkText}>Shocking Ironic hahaha....</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>2.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=iZ_P3F3nA1U')}><Text style={styles.linkText}>The one where this guy became an arcade cabinet and people played on him</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>3.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=FbZc7-CiCdY')}><Text style={styles.linkText}>Relateable</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>4.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=QUG2V97-JMw/')}><Text style={styles.linkText}>Really Cool Wig ^-^ (The Making out part is my favorite)</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>4.5.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=rbxL5BVEkRs')}><Text style={styles.linkText}>I almost forgot about this SWAGALIOUS song too (TeeHee)</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>5.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zKaoDdNZhJE')}><Text style={styles.linkText}>This song from that one video</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>6.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=EehtkGu7Imk')}><Text style={styles.linkText}>ANGRY PEOPLE</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>7.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=iC3VGKCpwXk')}><Text style={styles.linkText}>I don't remember how I found this song</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>8.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=DIcKVk1ofGI')}><Text style={styles.linkText}>I got in trouble for incorperating this song in a convo, but it's still a banger to me</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>9.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=RkHMKUhsBtU')}><Text style={styles.linkText}>A song about being the main character</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>10.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=I8sUC-dsW8A')}><Text style={styles.linkText}>I used to listen to this song every day since finding it in 2020</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>11.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=MdAzl3sOwmYk')}><Text style={styles.linkText}>Another electrifying song</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>12.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=D67jM8nO7Ag')}><Text style={styles.linkText}>This will always be a special place in my heart </Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>13.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=GCO62VNm67k')}><Text style={styles.linkText}>This was in my old carrd as my fav music, if I didn't include it I'd get angry letters :(</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>14.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=iwxQZX-hHwg')}><Text style={styles.linkText}>A Sweet song that includes grave digging for profit ^V^</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>15.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=pjeF8aiQgLU')}><Text style={styles.linkText}>i'M a nIcE gUy pLeAsE nOtIcE mE!!!!!!!!!1!!!!!!! the musical</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>16.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5_QwMRE-BKc')}><Text style={styles.linkText}>This speaks to me...Idk why...</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>69.</Text><Pressable onPress={() => Linking.openURL('https://open.spotify.com/playlist/0ZSJe4SSYBRuDQvNpgtEqt?si=5c5e7a7fa9684ad1')}><Text style={styles.linkText}>Full Cursed Spotify Playlist that I listen/like here ^_^</Text></Pressable></View>

              <View style={styles.honorableMentionsRow}>
                <Image source={require('../assets/images/neko.gif')} style={{ width: 88, height: 31, imageRendering: 'pixelated' } as any} />
                <Text style={[styles.headerText, { fontSize: 14, textAlign: 'center' }]}>Honorable Mentions</Text>
              </View>

              <View style={styles.listItem}><Text style={styles.bullet}>1.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=bnUZ8HcPKsA')}><Text style={styles.linkText}>A song when I'm in love</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>2.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=CaTX0pt3uyg')}><Text style={styles.linkText}>A song when my crush rejects me :(</Text></Pressable></View>                            
              <View style={styles.listItem}><Text style={styles.bullet}>3.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=0vfZjdK8Ktw')}><Text style={styles.linkText}>A song when I try to reason with myself about the rejection</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>4.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=MdAzl3sOwmY')}><Text style={styles.linkText}>A song when I talk to my mind about nonsense</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>5.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=uxyM7vhU0uU')}><Text style={styles.linkText}>A song when I'm EMO</Text></Pressable></View>
              <View style={styles.listItem}><Text style={styles.bullet}>99.</Text><Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Z3zs61AOJ1o')}><Text style={styles.linkText}>A song about a Washing machine...</Text></Pressable></View>
            </View>

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
  menuRow: { flexDirection: 'row', paddingVertical: 4, paddingHorizontal: 6, borderBottomWidth: 1, borderBottomColor: '#808080' },
  menuText: { fontFamily: 'W95FA', color: '#000', marginRight: 15 },
  notepadBody: { flex: 1, backgroundColor: '#ffffff', borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', margin: 4 },
  scrollArea: { paddingRight: 10, flex: 1 },
  scrollContent: { padding: 15 },
  headerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  honorableMentionsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: 15, gap: 10 },
  headerText: { color: '#000', fontFamily: 'W95FA', fontSize: 22, fontWeight: 'bold' },
  bodyText: { color: '#000', fontFamily: 'W95FA', fontSize: 14, lineHeight: 22, marginBottom: 20 },
  listContainer: { marginLeft: 10, marginBottom: 20 },
  listItem: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 },
  bullet: { color: '#000', fontFamily: 'W95FA', fontSize: 14, marginRight: 8, fontWeight: 'bold' },
  listText: { color: '#000', fontFamily: 'W95FA', fontSize: 14, flex: 1, lineHeight: 20 },
  faqHeaderContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  questionText: { color: '#000', fontFamily: 'W95FA', fontSize: 14, fontWeight: 'bold', marginTop: 15, marginBottom: 4 },
  answerText: { color: '#000', fontFamily: 'W95FA', fontSize: 14, lineHeight: 20, marginLeft: 10 },
  linkText: { color: '#0000EE', textDecorationLine: 'underline', fontFamily: 'W95FA', fontSize: 14, lineHeight: 20 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  dialogWindow: { width: '90%', maxWidth: 450, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', backgroundColor: '#c0c0c0' },
  dialogBody: { padding: 15 },
  catImageWrapper: { alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderWidth: 2, borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', backgroundColor: '#000', height: 300 },
  catImage: { width: '100%', height: '100%' },
  dialogActionRow: { flexDirection: 'row', justifyContent: 'flex-end' },
  modalButton: { width: 80, backgroundColor: '#c0c0c0', paddingVertical: 4, borderWidth: 2, borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', alignItems: 'center' },
  win95ButtonText: { fontFamily: 'W95FA', fontWeight: 'bold', color: '#000' }
});