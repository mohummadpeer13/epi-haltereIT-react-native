import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const stepsData = [
  {
    id: 1,
    image: require("../assets/fonc/fonc1.png"),
    buttonText: "CONNECTE TOI",
    buttonAction: () => console.log("Button 1 pressed!")
  },
  {
    id: 2,
    image: require("../assets/fonc/fonc2.png"),
    buttonText: "CHOISI TON COACH",
    buttonAction: () => console.log("Button 2 pressed!")
  },
  {
    id: 3,
    image: require("../assets/fonc/fonc3.png"),
    buttonText: "COMPLETE TON PROFIL",
    buttonAction: () => console.log("Button 3 pressed!")
  },
  {
    id: 4,
    image: require("../assets/fonc/fonc4.png"),
    buttonText: "RESERVE TA SEANCE",
    buttonAction: () => console.log("Button 4 pressed!")
  },
  {
    id: 5,
    image: require("../assets/fonc/fonc5.png"),
    buttonText: "ACTIVE TA WEBCAM",
    buttonAction: () => console.log("Button 5 pressed!")
  },
  {
    id: 6,
    image: require("../assets/fonc/fonc6.png"),
    buttonText: "LET'S GO WORKOUT",
    buttonAction: () => console.log("Button 6 pressed!")
  }
];

const Fonctionnement = () => {
  return (
    <View className="border rounded-xl mt-16 p-4 mx-4">
      <Text className='px-8 mt-4 mb-8 text-3xl font-bold text-center'>COMMENT CELA FONCTIONNE</Text>
      {stepsData.map((step) => (
        <View key={step.id} className="mb-8">
          {/* Image */}
          <Image
            source={step.image}
            style={{ width: '100%', height: 150, resizeMode: 'contain' }}
            alt="fonctionnement"
          />
          {/* Bouton en bas */}
          <View className="flex justify-center items-center mt-4">
            <TouchableOpacity
              className="bg-[#011e28] py-4 px-10 rounded-md"
              onPress={step.buttonAction}
            >
              <Text className="text-white text-md">{step.buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Fonctionnement;
