import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import IndexPage from './pages/IndexPage';
import './global.css';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <IndexPage />
      </ScrollView>

    </SafeAreaView>
  );
}