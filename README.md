#Go Style QR Code Reader mobile application


## Prerequisites
- __Install [NodeJS](https://nodejs.org/en/download/).__

- __Install Ionic:__

    - in terminal:
    
             $ npm install -g @ionic/cli
 

## Project Installation
- open terminal in project folder

        $ npm install

## Start project
- __open terminal in project folder__

        $ ionic serve
    
- __open browser on http://localhost:8100__


## Build Application for iOS (on MacOS Only)

You can run your app on a simulated device or install it on your own iPhone (makes sure your iPhone is connected by USB).
>Note: if you chose to build on simulated device, camera won't work.

- Install Xcode from AppStore

- Once Xcode is installed, make sure the command-line tools are selected for use:
    
             $ xcode-select --install
        
- Build app for iOS:
    - open terminal in project folder:

             $ ionic cordova prepare ios

- In Xcode, open project (Gostyle/platforms/ios/MyApp.xcodeproj)

- Chose your Device:
    ![Xcode device selection](https://imgur.com/DxXw2GN.png)

 - Add Apple ID (not required for emulated devices):
 
      - in Xcode, go into Preferences > Accounts & add your Apple ID


- configure Development Team in "Signing & capabilities" options:
![Xcode development team selection](https://imgur.com/dDMiWkl.png)


- hit "build" button:
    ![Xcode build button](https://i.imgur.com/n7B5DZp.png)


