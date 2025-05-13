import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
  return (
    <View >
      <Link href="/notifications">Feed screen in tabs</Link>
    </View>
  );
}
