Implemented from :
https://medium.com/react-native-training/deep-linking-your-react-native-app-d87c39a1ad5e

In browser type:

peopleapp://people/0
peopleapp://people/1
peopleapp://people/2
peopleapp://people/3


In android browser:
npx uri-scheme open peopleapp://people/0 --android
npx uri-scheme open peopleapp://people/1 --android
npx uri-scheme open peopleapp://people/2 --android
npx uri-scheme open peopleapp://people/3 --android


The functionality has changed slightly in Chrome for Android, versions 25 and later.
It is no longer possible to launch an Android app by setting an iframe's src attribute.
For example, navigating an iframe to a URI with a custom scheme such as
paulsawesomeapp:// will not work even if the user has the appropriate app installed.
Instead, you should implement a user gesture to launch the app via a custom scheme,
or use the “intent:”.

You can read more about how intents work here. However, the tutorial you followed,
for deeplinking will work on other browsers which are not chrome or chrome based.
