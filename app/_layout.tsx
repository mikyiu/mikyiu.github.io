import { Computer, Folder, HelpBook, Notepad } from '@react95/icons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, Slot, usePathname } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';


export default function RootLayout() {
  const pathname = usePathname(); 

  // --- CLOCK LOGIC ---
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    };
    updateTime(); 
    const timer = setInterval(updateTime, 1000); 
    return () => clearInterval(timer); 
  }, []);

  const [fontsLoaded] = useFonts({
    'W95FA': require('../assets/fonts/W95FA.otf'), 
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      
      {/* Void Background */}
      <LinearGradient
        colors={['#000000', '#0a0a2a', '#1a0b2e', '#2d004d']}
        style={styles.background}
      />

      <View style={styles.content}>
        <Slot />
      </View>

      <View style={styles.win95Taskbar}>
        
        {/* Start Button */}
        <Link href="/" asChild>
          <Pressable style={StyleSheet.flatten([styles.win95Button, styles.startButton, pathname === '/' && styles.buttonPressed])}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Computer variant="16x16_4" style={{ width: 16, height: 16, marginRight: 4 }} />
              <Text style={StyleSheet.flatten([styles.buttonText, { fontWeight: 'bold' }])}>
                Home
              </Text>
            </View>
          </Pressable>
        </Link>

        <View style={styles.divider} />

        {/* Navigation Tabs */}
        <View style={styles.navTabsContainer}>
          <Link href="/about" asChild>
            <Pressable style={StyleSheet.flatten([styles.win95Button, styles.navTab, pathname === '/about' && styles.buttonPressed])}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Notepad variant="16x16_4" style={{ width: 16, height: 16, marginRight: 6 }} />
                <Text style={styles.buttonText} numberOfLines={1}>
                  About.txt
                </Text>
              </View>
            </Pressable>
          </Link>

          {/* Shrine Tab */}
          <Link href="/shrine" asChild>
            <Pressable style={StyleSheet.flatten([styles.win95Button, styles.navTab, pathname === '/shrine' && styles.buttonPressed])}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Folder variant="16x16_4" style={{ width: 16, height: 16, marginRight: 6 }} />
                <Text style={styles.buttonText} numberOfLines={1}>
                  Shrine
                </Text>
              </View>
            </Pressable>
          </Link>

          <Link href="/guestbook" asChild>
            <Pressable style={StyleSheet.flatten([styles.win95Button, styles.navTab, pathname === '/guestbook' && styles.buttonPressed])}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <HelpBook variant="16x16_4" style={{ width: 16, height: 16, marginRight: 6 }} />
                <Text style={styles.buttonText} numberOfLines={1}>
                  Guestbook.exe
                </Text>
              </View>
            </Pressable>
          </Link>
        </View>

        {/* System Tray */}
        <View style={styles.systemTray}>
          <Image 
            source={require('../assets/icons/speaker.png')} 
            style={[styles.trayIconImage, { marginRight: 4, imageRendering: 'pixelated' } as any]} 
          />
          <Image 
            source={require('../assets/icons/plug.png')} 
            style={[styles.trayIconImage, { marginRight: 6, imageRendering: 'pixelated' } as any]} 
          />
          <Text style={styles.clockText}>{currentTime}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  background: {
    ...StyleSheet.absoluteFillObject, 
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 35, 
  },
  win95Taskbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30, 
    backgroundColor: '#c0c0c0', 
    borderTopWidth: 1,
    borderTopColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  win95Button: {
    backgroundColor: '#c0c0c0',
    height: 24,
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderWidth: 1.5,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#000000',
    borderRightColor: '#000000',
    marginRight: 4,
  },
  buttonPressed: {
    borderTopColor: '#000000',
    borderLeftColor: '#000000',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
    backgroundColor: '#dfdfdf', 
    paddingTop: 2, 
    paddingLeft: 8,
  },
  startButton: {
    paddingHorizontal: 8,
  },
  navTabsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTab: {
    minWidth: 100,
    maxWidth: 150,
  },
  buttonText: {
    fontFamily: 'W95FA', 
    fontSize: 12,
    color: '#000',
  },
  divider: {
    height: 22,
    width: 2,
    borderLeftWidth: 1,
    borderLeftColor: '#808080',
    borderRightWidth: 1,
    borderRightColor: '#ffffff',
    marginHorizontal: 4,
  },
  systemTray: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    paddingHorizontal: 6,
    borderWidth: 1.5,
    borderTopColor: '#808080',
    borderLeftColor: '#808080',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
    marginRight: 2,
  },
  trayIconImage: {
    width: 16,
    height: 16,
  },
  clockText: {
    fontFamily: 'W95FA',
    fontSize: 11,
    color: '#000',
  }
});