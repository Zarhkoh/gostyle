#Go Style QR Code Reader mobile application

##How to start

#### 1) Prerequisites
Install [NodeJS](https://nodejs.org/en/download/).

in terminal:

    $ npm install -g @ionic/cli
  

#### 2) install project
open terminal in project folder

    $ npm install


#### 3) start project
open terminal in project folder

    $ ionic serve
    
open browser on http://localhost:8100


### 4) build Application for iOS (on MacOS Only)

You can run your app on a simulated device or install it on your own iPhone (makes sure your iPhone is connected by USB). 
Note: if you chose to build on simulated device, camera won't work.


#### if you chose to build on emulated device

- Install Xcode from AppStore

- Once Xcode is installed, make sure the command-line tools are selected for use:

    $ xcode-select --install

- prepare app to run on iOS:
open terminal in project folder

    $ ionic cordova prepare ios

- In Xcode, open project (Gostyle/platforms/ios/MyApp.xcodeproj)

- Chose your Device. 
![Xcode device selection](https://imgur.com/DxXw2GN)

- hit "build" button
![Xcode build button](https://imgur.com/a/vhf4w49)

##### if you chose to build on your iPhone

- Install Xcode from AppStore

- Add Apple ID on Xcode
in Xcode, go into Preferences > Accounts & add your Apple ID

- Once Xcode is installed, make sure the command-line tools are selected for use:

    $ xcode-select --install

- prepare app to run on iOS:
open terminal in project folder

    $ ionic cordova prepare ios

- In Xcode, open project (Gostyle/platforms/ios/MyApp.xcodeproj)

- Chose your Device. 
![Xcode device selection](https://imgur.com/DxXw2GN)

- configure Development Team in "Signing & capabilities" options
![Xcode development team selection](https://imgur.com/dDMiWkl)

- hit "build" button
![Xcode build button](https://imgur.com/a/vhf4w49)


