# STUDENT'S DIARY
- It is a web app built using *React* and *Firebase*
- This could be used to store important keynotes
- It supports markdown

# Preview of website 
### *[Visit Student diary](https://deepakdpyqaz.github.io/student_diary)*
- The website had been hosted using github pages
- Testing credentials:
    - username: name@mail.com
    - password: password

⚠️ _Do not put any sensitive information on the testing account. The data on testing account would be cleared after sometime._
## Steps to install:-
- Clone the repository
- Initialise a node project by the command
```shell
npm init
```
- Install the required packages by the command
```shell
npm install
```
- Add the firebase configuration file at **src/firebaseConfig/** with the name of **firebase.jsx**. The structure of file would be like 
```js
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "Your api key",
    authDomain: "Your auth domain",
    projectId: "Your project Id",
    storageBucket: "Your storage bucket",
    messagingSenderId: "Your messaging sender Id",
    appId: "Your app Id",
    measurementId: "Your measurement Id"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {auth,db};
```
**Note: You can get that configuration from firebase setup**
