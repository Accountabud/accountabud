import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Home: 'home',
        Links: 'links',
        Progress: 'progress',
        Login: 'login',
        Resources: 'resources',
        Goals: 'goals',
        ReadPage: 'readpage',
        WatchPage: 'watchpage',
        DonatePage: 'donatepage',
        ListenPage: 'listenpage',
        ShopPage: 'shoppage',

      },
    },
  },
};
