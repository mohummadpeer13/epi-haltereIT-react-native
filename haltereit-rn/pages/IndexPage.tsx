import { View, Text, StyleSheet } from 'react-native';

import VideoPlayer from 'components/Video';
import Carousel from 'components/Carousel';
import Navbar from 'components/Navbar';
import Fonctionnement from 'components/Fonctionnement';

const videoSource =
  'https://res.cloudinary.com/dh2ifelf9/video/upload/v1643905038/video_musique_otjdaw.mp4';

  export default function IndexPage() {

  return (
    <View className="flex-1">
        <Navbar />
        
        <VideoPlayer videoSource={videoSource} />

        <View className="mb-8">
          <Text className="text-xl text-justify px-8 text-gray-800 mb-6">
            <Text className="font-bold">HALTERE IT </Text>
            est une plateforme interactive de coaching sportif dispensé par des coachs privés présents de 7h-23h / 7j-7, un programme nutritionnel sur mesure et un suivi de progression rendu possible grâce à l'intelligence artificielle et aux données de leur montre connectée.
          </Text>
        </View>

        <Carousel />
        <Fonctionnement />

    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});