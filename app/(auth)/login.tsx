import { COLORS } from '@/constants/theme';
import { styles } from '@/styles/auth.styles';
import { useSSO } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import * as AuthSession from 'expo-auth-session';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function login() {
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handleGithubSignIn = async () => {
    try {
      const  { createdSessionId, setActive } = await startSSOFlow({
        strategy: 'oauth_github',
        redirectUrl: AuthSession.makeRedirectUri(),
      });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace('/(tabs)');
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const  { createdSessionId, setActive } = await startSSOFlow({
        strategy: 'oauth_google',
        redirectUrl: AuthSession.makeRedirectUri(),
      });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace('/(tabs)');
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.container}>

      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
      </View>

      {/* ILLUSTRATION */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('@/assets/images/auth-bg-2.png')}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>

      {/* LOGIN SECTION */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGithubSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-github" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Github</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>

    </View>
  );
}
