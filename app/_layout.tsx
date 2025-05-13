// import { tokenCache } from '@/cache'; // Uncomment this line if you're using the custom cache
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error('Please add your Clerk publishable key to your .env file');
}

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
    >
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: '#000' }}
        >
          <StatusBar style="light" />
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
