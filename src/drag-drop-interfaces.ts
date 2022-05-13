
// Drag & Drop Interfaces
namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }
  
  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}

// ------------ WORKING WITH NAMESPACES ------------  \\
// create new TS files with namespace (named App in each file exporting and importing)
// add export before interfaces within the namespace
// move everything in prior project into a namespace
// import via reference path
// tsconfig: comment in "outFile": "./dist/bundle.js",  
// tsconfig: adjust module to "amd"