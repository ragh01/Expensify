import firebase from 'firebase';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3xRw6gATk94cUdw-dwHJFoFvZvYzQ1Es",
    authDomain: "expensify-43edd.firebaseapp.com",
    projectId: "expensify-43edd",
    storageBucket: "expensify-43edd.appspot.com",
    messagingSenderId: "461742757096",
    appId: "1:461742757096:web:c6aab7461dff5500c0a55d",
    measurementId: "G-FN23NPLCNB"
  };

  firebase.initializeApp(firebaseConfig);

const database =  firebase.database();

// database.ref('notes/-MOm2vG1BKkoJiy7OzcH').remove();
// // database.ref('notes').push({
// //     title:'curses',
// //     body:'react native'
// // })

// // const firenotes = {
// //     notes:{
// //         qwerty:{
// //             title:'is it',
// //             body:'it is'
// //         },
// //         qwertyuiop:{
// //             title:'is it',
// //             body:'it is'
// //         }
// //     }
// // }

// // const notes = [{
// //     id:12,
// //     title:'a',
// //     body:'first'
// // },{
// //     id:14,
// //     title:'b',
// //     body:'second'
// // }];

// // database.ref('notes').set(notes)

// // database.ref().on('value',(snapshot)=>{
// //     console.log(snapshot.val());
// // })

// // setTimeout(()=>{
// //   database.ref('class').set('supreme');  
// // },3500)

// // setTimeout(()=>{
// //     database.ref().off();  
// //   },7000)
  
// // setTimeout(()=>{
// //     database.ref('class').set('supreme1111');  
// //   },10500)

// // database.ref('location')
// //   .once('value')
// //   .then((snapshot)=>{
// //     const val = snapshot.val();
// //     console.log(val);
// // })
// //   .catch((e)=>{
// //       console.log('error fetching data',e)
// //   })
// //   database.ref().set({
// //     name:'Raghav Mittal',
// //     class:'suppers',
// //     stresslevel:6,
// //     job:{
// //         title:'soft dev',
// //         comp:"google"
// //     },
// //     location: {
// //         city:'mzn',
// //         state:'U.P.'
// //     }
// // });
// // // database.ref('location/state').set('mumbai');
// // // database.ref('football').set({
// // //     team:"manchester united",
// // //     rival:"liverpool"
// // // })

// // database.ref().update({
// //     stresslevel:9,
// //     'job/comp':'amazon',
// //     'location/city':'noida',
// // })

// // database.ref('football').set(null);

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('data is removed')
// //     }).catch((e) => {
// //         console.log('cant remove data',e)
// //     })

export {firebase, database as default};

 