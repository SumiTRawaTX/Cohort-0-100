// async func()
// some sync task
// want my work which async return
// some other sync task

 function someSyncTask() {
    console.log("some sync task 1");
 }

 function someSyncTask2() {
    console.log("some sync task 2");
 }

 setTimeout(function() {
    someSyncTask2();
 }, 1000); 
 someSyncTask();