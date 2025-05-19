// components/VideoPlayer.tsx
import React, { useEffect, useState } from 'react';
import { useEvent } from 'expo';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const WORKOUT_TYPES = ['à domicile', 'en entreprise', 'de 7h à 23h - 7j/7', 'dans le sport', 'dans la nutrition'];

interface VideoPlayerProps {
  videoSource: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource }) => {

  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
  
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorkoutIndex((prev) => (prev + 1) % WORKOUT_TYPES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />

      <LinearGradient
        colors={['rgba(5, 5, 5, 0.7)']}
        style={styles.overlay}>
        <Text className='font-bold text-2xl text-white text-center mx-20 mb-8'>AMELIORER VOTRE QUALITE DE VIE</Text>
        <Text className='font-bold text-2xl text-yellow-400'>On vous accompagne</Text>
        <Text className='text-yellow-400 text-2xl'>{WORKOUT_TYPES[currentWorkoutIndex]}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (width + 20) * 0.6875,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoPlayer;
