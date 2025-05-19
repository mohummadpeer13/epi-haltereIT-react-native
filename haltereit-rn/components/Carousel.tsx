import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from "react-native";
import { useState, useRef, useEffect } from "react";

const { width: screenWidth } = Dimensions.get("window");

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const carouselData = [
    {
      id: 1,
      imageUrl: require("../assets/caroussel/caroussel1.png"), // Utilisation de require() pour les images locales
      title: "VOTRE PROPRE COACH",
      text: "Qui n'a jamais rêvé d'avoir son propre coach ? Nos coachs sont certifiés et formés pour être aux petits soins. Ils vous transmettent leur savoir-faire, le goût de l’effort, l’envie de réussir et le plaisir de se sentir bien. Nos services s’adaptent à vos contraintes, à vos besoins et à votre budget. Faites du sport en toute liberté comme vous voulez, quand vous voulez, avec qui vous voulez.",
    },
    {
      id: 2,
      imageUrl: require("../assets/caroussel/caroussel2.png"), // Utilisation de require() pour les images locales
      title: "NUTRITION",
      text: "La performance passe par une bonne alimentation. Bien s’alimenter nécessite de bonnes connaissances, une bonne organisation et du temps. Pour vous permettre d’y arriver, nous avons développé plusieurs outils pour vous assister au quotidien. Vous pouvez désormais manger sans vous priver et sans vous prendre la tête.",
    },
    {
      id: 3,
      imageUrl: require("../assets/caroussel/caroussel3.png"), // Utilisation de require() pour les images locales
      title: "BIEN ÊTRE",
      text: "Comment penser à soi quand on a un agenda bien rempli ? Après une longue journée de travail, comment trouver l'envie et l'énergie de s'entraîner ? Tout simplement grâce à la Team. Quand on a une équipe qui croit en nous, qui nous comprend et qui est disponible pour nous remonter le moral, on ne peut que trouver la force d'y arriver.",
    },
    {
      id: 4,
      imageUrl: require("../assets/caroussel/caroussel4.png"), // Utilisation de require() pour les images locales
      title: "ENTREPRISE",
      text: "HALTERE'IT est une plateforme interactive de coaching sportif dispensé par des coachs privés présents de 7h à 23h, 7j/7j, avec un programme nutritionnel sur-mesure, et un suivi de progression rendu possible grâce à l'intelligence artificielle et aux données de leurs montres connectées.",
    },
  ];

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / screenWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    // Intervalle pour faire défiler le carrousel toutes les 4 secondes
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % carouselData.length;
        // Faire défiler l'écran en fonction de l'index
        scrollViewRef.current?.scrollTo({
          x: nextIndex * screenWidth,
          animated: true,
        });
        return nextIndex;
      });
    }, 7000); // 7 secondes

    // Cleanup de l'intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, [carouselData.length]); // Re-démarre si la taille du carrousel change

  // Fonction pour naviguer au slide spécifique lors du clic sur un point
  const goToSlide = (index: number) => {
    setActiveIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
  };

  return (
    <View className="relative">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        scrollEnabled={false} // Désactiver le défilement manuel
      >
        {carouselData.map((item) => (
          <View key={item.id} className="w-screen items-center justify-center">
            {/* Image en haut */}
            <Image
              source={item.imageUrl}
              style={{ width: "100%", height: 250, resizeMode: "cover" }} // Image couvrant toute la largeur
              alt={`Slide ${item.id}`}
            />
            {/* Texte sous l'image */}
            <Text className="text-center px-4 pt-6 text-justify text-2xl text-black font-semibold">{item.title}</Text>
            <Text className="text-center px-8 pt-6 text-justify text-lg text-black">{item.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Indicateurs de pagination en dehors du carrousel */}
      <View className="flex-row justify-center items-center">
        {carouselData.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
            <View
              className={`h-4 w-4 mx-3 rounded-full ${
                index === activeIndex ? "bg-yellow-400" : "bg-gray-400"
              }`}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Carousel;
