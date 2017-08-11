# Queue-Management

#Steps to setup environment and device for REACT_NATIVE

1First Install Node In Your System.
2.Run the following command in a Command Prompt or shell(npm install -g react-native-cli).
3.Install Android SDK Tools Only (If Don't Want To Install Android Studio).
4.Then make sure the following items are all checked:

Google APIs
Android SDK Platform 23
Intel x86 Atom_64 System Image
Google APIs Intel x86 Atom_64 System Image
5.After Configuring SDK Manager Set The Environment Variable(c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk).
6.Create The Folder And In Your Project Create Application Through Command-->

react-native init testing(In CMD).

7.Connect Your Device Through USB And Select Debugging Mode In Your Developer Option In Your Device.
8.To Check Status Of Your Device Run ( adb devices ) in CMD,You Will See Your Device Connected.
9.Run react-native run-android inside your React Native project folder:

cd testing
react-native run-android.



#Steps to setup environment and device for REACT-App.

1.Run The Command In Your Project Directory
npm install -g create-react-app
create-react-app new_project

2.To Run The App;
cd new_project
npm start