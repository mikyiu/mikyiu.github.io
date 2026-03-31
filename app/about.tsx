import { Image, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function About() {
  
  // --- AGE CALCULATOR ---
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date('2000-10-22');
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const currentAge = calculateAge();

  return (
    <View style={styles.pageContainer}>
      {Platform.OS === 'web' && (
        <style>{`
          /* Target ALL scrollable elements to force the 3D style */
          *::-webkit-scrollbar {
            width: 16px;
            background: #dfdfdf;
          }

          *::-webkit-scrollbar-thumb {
            background: #c0c0c0;
            border-top: 2px solid #ffffff;
            border-left: 2px solid #ffffff;
            border-bottom: 2px solid #000000;
            border-right: 2px solid #000000;
          }
          
          *::-webkit-scrollbar-thumb:active {
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            border-bottom: 2px solid #ffffff;
            border-right: 2px solid #ffffff;
          }

          *::-webkit-scrollbar-button {
            display: block;
            background-color: #c0c0c0;
            border-top: 2px solid #ffffff;
            border-left: 2px solid #ffffff;
            border-bottom: 2px solid #000000;
            border-right: 2px solid #000000;
            background-repeat: no-repeat;
            background-position: center;
            height: 16px;
            width: 16px;
          }

          *::-webkit-scrollbar-button:active {
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            border-bottom: 2px solid #ffffff;
            border-right: 2px solid #ffffff;
          }

          /* Hide the 'wrong' buttons that create the double-arrow look */
          *::-webkit-scrollbar-button:start:increment,
          *::-webkit-scrollbar-button:end:decrement {
            display: none;
          }

          /* Style the correct, singular buttons */
          *::-webkit-scrollbar-button:start:decrement {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 4L4 8h8z" fill="black"/></svg>');
          }
          *::-webkit-scrollbar-button:end:increment {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 12L4 8h8z" fill="black"/></svg>');
          }
        `}</style>
      )}
      {/* ------------------------------------------------ */}

      <View style={styles.windowFrame}>
        
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>ABOUT_ME.TXT - Notepad</Text>
          <View style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </View>
        </View>

        <View style={styles.menuRow}>
          <Text style={styles.menuText}>File</Text>
          <Text style={styles.menuText}>Edit</Text>
          <Text style={styles.menuText}>Search</Text>
          <Text style={styles.menuText}>Help</Text>
        </View>

        <View style={styles.notepadBody}>
          <ScrollView style={styles.scrollArea}>
            
            <View style={styles.headerContainer}>
              <Image 
                source={require('../assets/images/question.gif')} 
                style={{ width: 48, height: 48, marginRight: 10, imageRendering: 'pixelated' } as any}
              />
              <Text style={styles.headerText}>WHOAMI.EXE</Text>
            </View>
            
            <Text style={styles.bodyText}>
              Entity known as "Eric". Other aliases include: Mikyiu, Illl Illl, Barcode, Smiley Face, Star, and of course Princess! (Don't ask)
            </Text>

            {/* --- BULLETED LIST --- */}
            <View style={styles.listContainer}>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>&gt;</Text>
                <Text style={styles.listText}>Age: {currentAge}</Text>
              </View>
              
              <View style={styles.listItem}>
                <Text style={styles.bullet}>&gt;</Text>
                <Text style={styles.listText}>Location: Planet Earth. Just Kidding I'm in Washington State! </Text>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>&gt;</Text>
                <Text style={styles.listText}>IQ: It fluctuates!  </Text>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>&gt;</Text>
                <Text style={styles.listText}>Alignment: Lawful Neutral but my Heart is Chaotic Evil :] </Text>
              </View>
              
              <View style={styles.listItem}>
                <Text style={styles.bullet}>&gt;</Text>
                <Text style={styles.listText}>Favorite Games: Born to play: Poptropica, Club Penguin, Those random Flash games (I love u Unblocked Games) and of course FunBrain, Force to play: Genshin Imapct, FFXIV, OverMeme :(  </Text>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>&gt;</Text>
                <Text style={styles.listText}>Likes: Geeking out on hardware, Dorks and being called a dork, Sweets, Pizza, My friends, Puns...like Really REALLY BAD puns hehe, Being embarassed :3, and you of course :blush: </Text>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>&gt;</Text>
                <Text style={styles.listText}>Dislikes: Drama (The bad type of course), Soul-sucking leeches, Conflict, Toxic and mean people :(  </Text>
              </View>
            </View>

            <View style={styles.faqHeaderContainer}>
            <Image 
                source={require('../assets/images/ballooncato.gif')} 
                style={{ 
                  width: 64, 
                  height: 64, 
                  marginRight: 10, 
                  imageRendering: 'pixelated',
                  resizeMode: 'contain' 
                } as any}
              />
              <Text style={styles.headerText}>F.A.Q.</Text>
            </View>

            <Text style={styles.questionText}>Q: What is the meaning of this site?</Text>
            <Text style={styles.answerText}>A: That's a good question. My answer is memes, and a updated carrd :) No you may not see the old carrd I deleted it.  </Text>

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

            <Text style={styles.questionText}>Q: What's your biggest weakness?</Text>
            <Text style={styles.answerText}>A: A Box of Pepperoni Pizza and chocolate milkshake with fries. While we're at it, Chocolate chip cookies, and chocolate cake mmmmmmmmmmm.</Text>

            <Text style={styles.questionText}>Q: Where would you want to travel to the most?</Text>
            <Text style={styles.answerText}>A: That's a good question. If I had to stay in the States, I'd love to visit some major cities in California =v= (San Francisco, San Deigo, Los Angeles, etc) but overall, I want to travel the world. In no order I'd visit Toronto, Vancouver B.C., Melbourne Australia, Tokyo Japan, Seoul South Korea, Jakarta Indonesia, Singapore, Quezon City, Mae Hong Son Thailand, Chiang Mai Thailand, and Auckland New Zealand!  </Text>

            <Text style={styles.questionText}>Q: Where do you find these gifs?</Text>
            <Text style={styles.answerText}>A: At Gifcities ^_^</Text>

            <Text style={styles.questionText}>Q: Why do you like saying TERRIBLE PUNS?!</Text>
            <Text style={styles.answerText}>A: They make me smile :D + I Enjoy the physical eye rolling it provides hehe</Text>

            <Text style={styles.questionText}>Q: Biggest fears?</Text>
            <Text style={styles.answerText}>A: The ocean... and bees @.@</Text>

            <Text style={styles.questionText}>Q: how many songs is acceptable to have as favorite?</Text>
            <Text style={styles.answerText}>A: 999999. What are mine? Scroll down :] </Text>

            {/* --- SYSTEM_LOGS.DAT COMMENTED OUT FOR NOW --- */}
            {/*
            <View style={[styles.faqHeaderContainer, { marginTop: 20 }]}>
              <Computer variant="32x32_4" style={{ width: 32, height: 32, marginRight: 10 }} />
              <Text style={styles.headerText}>SYSTEM_LOGS.DAT</Text>
            </View>
            <Text style={styles.bodyText}>
              Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.
            </Text>
            */}

            {/* --- SONGS PLAYLIST SECTION --- */}
            <View style={[styles.faqHeaderContainer, { marginTop: 20 }]}>
              <Image 
                source={require('../assets/images/wink.gif')} 
                style={{ 
                  width: 48, 
                  height: 48, 
                  marginRight: 10, 
                  imageRendering: 'pixelated',
                  resizeMode: 'contain' 
                } as any}
              />
              <Text style={styles.headerText}>TOP 16 SWAGALIOUS SONGS! (# 1 may shock you!)</Text>
            </View>
            
            <View style={styles.listContainer}>
              
              <View style={styles.listItem}>
                <Text style={styles.bullet}>1.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=VMStKtXO4A8')}>
                  <Text style={styles.linkText}>Shocking Ironic hahaha....</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>2.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=iZ_P3F3nA1U')}>
                  <Text style={styles.linkText}>The one where this guy became an arcade cabinet and people played on him</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>3.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=FbZc7-CiCdY')}>
                  <Text style={styles.linkText}>Relateable</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>4.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=QUG2V97-JMw/')}>
                  <Text style={styles.linkText}>Really Cool Wig ^-^ (The Making out part is my favorite)</Text>
                </Pressable>
              </View>

               <View style={styles.listItem}>
                <Text style={styles.bullet}>4.5.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=rbxL5BVEkRs')}>
                  <Text style={styles.linkText}>I almost forgot about this SWAGALIOUS song too (TeeHee)</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>5.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zKaoDdNZhJE')}>
                  <Text style={styles.linkText}>This song from that one video</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>6.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=EehtkGu7Imk')}>
                  <Text style={styles.linkText}>ANGRY PEOPLE</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>7.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=iC3VGKCpwXk')}>
                  <Text style={styles.linkText}>I don't remember how I found this song</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>8.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=DIcKVk1ofGI')}>
                  <Text style={styles.linkText}>I got in trouble for incorperating this song in a convo, but it's still a banger to me</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>9.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=RkHMKUhsBtU')}>
                  <Text style={styles.linkText}>A song about being the main character</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>10.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=I8sUC-dsW8A')}>
                  <Text style={styles.linkText}>I used to listen to this song every day since finding it in 2020</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>11.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=MdAzl3sOwmYk')}>
                  <Text style={styles.linkText}>Another electrifying song</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>12.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=D67jM8nO7Ag')}>
                  <Text style={styles.linkText}>This will always be a special place in my heart </Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>13.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=GCO62VNm67k')}>
                  <Text style={styles.linkText}>This was in my old carrd as my fav music, if I didn't include it I'd get angry letters :(</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>14.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=iwxQZX-hHwg')}>
                  <Text style={styles.linkText}>A Sweet song that includes grave digging for profit ^V^</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>15.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=pjeF8aiQgLU')}>
                  <Text style={styles.linkText}>i'M a nIcE gUy pLeAsE nOtIcE mE!!!!!!!!!1!!!!!!! the musical</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>69.</Text>
                <Pressable onPress={() => Linking.openURL('https://open.spotify.com/playlist/0ZSJe4SSYBRuDQvNpgtEqt?si=5c5e7a7fa9684ad1')}>
                  <Text style={styles.linkText}>Full Cursed Spotify Playlist that I listen/like here ^_^</Text>
                </Pressable>
              </View>

              {/* --- CENTERED HONORABLE MENTIONS TITLE --- */}
              <Text style={[styles.headerText, { fontSize: 14, marginTop: 15, marginBottom: 15, textAlign: 'center' }]}>
                Honorable Mentions
              </Text>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>1.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=bnUZ8HcPKsA')}>
                  <Text style={styles.linkText}>A song when I'm in love</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>2.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=CaTX0pt3uyg')}>
                  <Text style={styles.linkText}>A song when my crush rejects me :(</Text>
                </Pressable>
              </View>                            

              <View style={styles.listItem}>
                <Text style={styles.bullet}>3.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=0vfZjdK8Ktw')}>
                  <Text style={styles.linkText}>A song when I try to reason with myself about the rejection</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>4.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=MdAzl3sOwmY')}>
                  <Text style={styles.linkText}>A song when I talk to my mind about nonsense</Text>
                </Pressable>
              </View>
          
              <View style={styles.listItem}>
                <Text style={styles.bullet}>5.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=uxyM7vhU0uU')}>
                  <Text style={styles.linkText}>A song when I'm EMO</Text>
                </Pressable>
              </View>

              <View style={styles.listItem}>
                <Text style={styles.bullet}>99.</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Z3zs61AOJ1o')}>
                  <Text style={styles.linkText}>A song about a Washing machine...</Text>
                </Pressable>
              </View>
            </View>

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

  menuRow: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
  },

  menuText: {
    fontFamily: 'W95FA',
    color: '#000',
    marginRight: 15,
  },

  notepadBody: {
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

  scrollArea: {
    paddingRight: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  headerText: {
    color: '#000',
    fontFamily: 'W95FA',
    fontSize: 22,
    fontWeight: 'bold',
  },

  bodyText: {
    color: '#000',
    fontFamily: 'W95FA',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
  },

  listContainer: {
    marginLeft: 10,
    marginBottom: 20,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },

  bullet: {
    color: '#000',
    fontFamily: 'W95FA',
    fontSize: 14,
    marginRight: 8,
    fontWeight: 'bold',
  },

  listText: {
    color: '#000',
    fontFamily: 'W95FA',
    fontSize: 14,
    flex: 1, 
    lineHeight: 20,
  },

  faqHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  questionText: {
    color: '#000',
    fontFamily: 'W95FA',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 4,
  },

  answerText: {
    color: '#000',
    fontFamily: 'W95FA',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 10, 
  },

  linkText: {
    color: '#0000EE',
    textDecorationLine: 'underline',
    fontFamily: 'W95FA',
    fontSize: 14,
    lineHeight: 20,
  }
});