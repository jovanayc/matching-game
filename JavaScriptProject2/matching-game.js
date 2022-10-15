/*
    - photos start all shoowing backside
    - onclick, they will show faceside
    - if 2 are showing face & they are not the same, then flip both back to backsides
    - should have a set of photos in a file that are randomly selected and placed in different areas of the table
    - photos should be place twice --> Maybe a array that iterates throuogh twice at random filling each table cell (4 x 4)
    - stop game when all cards are matched or when countdown ends

    Additional
    - Countdown of 1 minute at top of the page
    - Modal that comes on page if countdown gets to 0 before user finishes the game
    - If user finishes the game before the timer --> get time
    - Modal for winner that says they won & thier time; also shows top 3 positions in leaderboard & user names
*/

 // added pictures to array twice
const imagesArray = ["./sister-photos/1-quiaira.jpg", "./sister-photos/2-jovie.jpg", "./sister-photos/3-nani.jpg", "./sister-photos/4-nijah.jpg", "./sister-photos/5-rri.jpg", "./sister-photos/6-harls.jpg", "./sister-photos/7-arlo.jpg", "./sister-photos/8-sox.jpg", "./sister-photos/1-quiaira.jpg", "./sister-photos/2-jovie.jpg", "./sister-photos/3-nani.jpg", "./sister-photos/4-nijah.jpg", "./sister-photos/5-rri.jpg", "./sister-photos/6-harls.jpg", "./sister-photos/7-arlo.jpg", "./sister-photos/8-sox.jpg"];
//cover image not included in imagesArray
var coverImage = "./sister-photos/0-cover.jpg";
var quiaira = "./sister-photos/1-quiaira.jpg"
var index;
const usedPhotos = []; // array of numbers already used
var removeUsedPhoto;
//var tableData = document.querySelectorAll(".table");//gets all table data elements
//var imageIds = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11","img12","img13","img14","img15","img16"];
var imageIds = document.getElementsByName('tImages');
var tableCellIds = ["cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8","cell9", "cell10","cell11","cell12","cell13","cell14","cell15","cell16"];
var chosenPhoto;


function flipImage(){ //this function change photos onclick; in the future it should only change 1 photo at a time

   //GOAL: if element td is clicked, then call click function & change only that cell
   var cellArr = document.getElementsByName("tableCell");
   var cell = document.getElementById(tableCellIds[0]);
   console.log(cellArr);
   console.log(cell);
   cell.addEventListener('click', showRandomPhoto()); //Shows random photo in selected cell when clicked
   
}

function showRandomPhoto(){
   //for (j=0; j<16; j++){//commented out to get images to stop loading on entire table on first click
      
      //choosing a random photo from the array using math random
      index = Math.floor(Math.random() * (imagesArray.length));// get random index # for Images array
      chosenPhoto = imagesArray[index]; //update chosen photo
      console.log(chosenPhoto);

      //console.log(imageIds[j]); // check that imageId is properly loading for the for loop
      
      //change element image attribute src to chosenPhoto
      imageIds[0].src = chosenPhoto;//changes image to hidden image
      console.log(`Starting Image Array length: ${imagesArray.length}`);//log starting image array length
      console.log(`Starting chosen photo: ${imagesArray[index]}`);

      removePhoto(index);

  // }
}

function removePhoto(){
   //Adding used photo to an array to keep track of used photos
   usedPhotos.push(imagesArray[index]);
   console.log(`Used Photo array: ${usedPhotos}`);

   //removing used photo from the imagesArray
   removeUsedPhoto = imagesArray.splice(index, 1);
   console.log(`Updated images arrray length after removal: ${imagesArray.length}`);
}

/*
function flipImage2() { //should create a random index for src image array; adds next element to the image file.
   var img = document.createElement('img')
   //index = Math.floor(Math.random() * 16);
   img.src = imagesArray[index];
   document.getElementById('image1B').appendChild(img).src;
};

function timer(){
  alert('You lost, try again to match all the tiles!');
}
*/


/* *********************************************
TO-DOS
1) How to get images to come up when that cell is clicked
2) How to get images outside of top row to respond to on click events
3) Go back & no hard-code image IDs
4) Potential solve, put "Flip" button at the bottom of each td box that While clicked flips that cell's picture
*/