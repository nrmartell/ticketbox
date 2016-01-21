App.accessRule('*');

App.info({
  id: 'com.ticketbox.meteor',
  name: 'ticketbox',
  description: 'A virtual box for your concert tickets',
  author: 'Natalie Martell',
  email: 'nrmartell@gmail.com',
  website: 'http://www.nataliemartell.com'
});

// Set up resources such as icons and launch screens.
App.icons({
  'iphone': 'icons/icon-60.png',
  'iphone_2x': 'icons/icon-60@2x.png',
  // ... more screen sizes and platforms ...
});

App.launchScreens({
  'iphone': 'splash/Default~iphone.png',
  'iphone_2x': 'splash/Default@2x~iphone.png',
  // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '986661728059577',
  API_KEY: '0efc27dfe496156445eca8f2eb3ccd99'
});