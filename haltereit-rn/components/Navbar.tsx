import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Menu, ChevronDown, ChevronRight, X } from 'lucide-react-native';
import logo from "../assets/logo-website.png";

const menuItems = {
  dashboard: {
    label: 'entraînement',
    submenus: ['En salle', 'A domicile', 'En extérieur', 'Connaissance du corps'],
  },
  coaching: {
    label: 'nutrition',
    submenus: ['Programmes', 'Séances', 'Planning', 'Exercices'],
  },
  nutrition: {
    label: 'bien-être',
    submenus: ['Plans alimentaires', 'Recettes', 'Calcul calories', 'Compléments'],
  },
};

export default function MobileNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpandedMenu(null);
  };

  const handleSubMenuPress = (menu: string, submenu: string) => {
    router.push(`/${menu.toLowerCase()}/${submenu.toLowerCase().replace(/ /g, '-')}`);
    closeMenu();
  };

  return (
    <View className="bg-white shadow-sm z-50">
      {/* Top Bar */}
      <View className="flex-row justify-between items-center px-4 py-4">
        {/* Logo */}
        <Image
          source={logo}
          className="w-36 h-7"
          alt="Logo Haltereit"
        />

        {/* Boutons droite */}
        <View className="flex-row items-center space-x-4">
          
          <TouchableOpacity 
            onPress={() => router.push('/connexion')}
            className="flex">
            <Text className="text-sm border border-yellow-400 p-2 rounded-xl mx-2 text-yellow-400 font-medium">Connexion</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => router.push('/inscription')}
            className="flex">
            <Text className="text-sm border border-yellow-400 p-2 rounded-xl mx-1 text-white font-medium bg-yellow-400">Inscription</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} color="#333" /> : <Menu size={24} color="#333" />}
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu déroulant */}
      {isMenuOpen && (
        <View className="p-4 bg-white rounded-xl border-2 border-yellow-400 mx-2 mb-4">
          
          {/* Menus */}
          {Object.entries(menuItems).map(([key, item]) => (
            <View key={key} className="mb-2">
              <TouchableOpacity
                onPress={() => setExpandedMenu(expandedMenu === key ? null : key)}
                className="w-full flex-row justify-between p-3 bg-gray-100 rounded-lg">
                <Text className="text-gray-800 font-medium uppercase">{item.label}</Text>
                {expandedMenu === key ? (
                  <ChevronDown size={20} color="#333" />
                ) : (
                  <ChevronRight size={20} color="#333" />
                )}
              </TouchableOpacity>

              {expandedMenu === key && (
                <View className="ml-4 mt-2">
                  {item.submenus.map((submenu) => (
                    <TouchableOpacity
                      key={submenu}
                      onPress={() => handleSubMenuPress(key, submenu)}
                      className="p-3 rounded-lg active:bg-gray-100">
                      <Text className="text-gray-700">{submenu}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}