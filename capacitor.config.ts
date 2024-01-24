import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.ng15cap',
  appName: 'ng15-cap',
  webDir: 'dist/ng15-cap',
  android: {
    useLegacyBridge: true
  }
};

export default config;
