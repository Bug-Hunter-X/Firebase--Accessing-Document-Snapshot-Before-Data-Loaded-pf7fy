The provided code shows how to handle this efficiently:

```javascript
// bug.js (Illustrates the error)
// ...other code...
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  console.log(doc.data().myProperty); // Error likely here if myProperty isn't ready
});
// ...other code...


// bugSolution.js (Correct Implementation)
// ...other code...
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    console.log(doc.data().myProperty); // Access after data is loaded
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
// ...other code...
```