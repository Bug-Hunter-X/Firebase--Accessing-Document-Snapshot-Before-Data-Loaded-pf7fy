# Firebase Asynchronous Operation Error
This repository demonstrates a common error encountered when working with Firebase's asynchronous nature and provides a solution.

## Problem:
When retrieving data from Firestore, if you try to access document properties before the data has fully loaded, you'll get an error.  This typically happens because asynchronous operations don't complete immediately.

## Solution:
The solution is to use the `.then()` method or `async/await` to handle the asynchronous nature of the operation.  Ensure that your code accessing the document data runs only after the `.get()` promise resolves.