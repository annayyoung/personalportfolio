//TODO: Create SIX variables, make sure they're in 24-Hour format

var wakeupTime = /* write code here! */;
var noon = /* write code here! */;
var lunchTime = /* write code here! */;
var napTime = /* write code here! */;
var partyTime = /* write code here! */;
var evening = /* write code here! */;

//TODO: Show the current time on the page

var showCurrentTime = function() {
    // TODO: Display the string on the webpage
  
    var clock = /* write code here! */;
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon) {
		  meridian = "PM";
	  }

	  if (hours > noon) {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    //TODO: SET CLOCK INNER-TEXT TO TIME
    clock.innerText = /* write code here! */;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() {
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  
  //TODO: SELECT timeEvent AND lolcatImage 

  var timeEventJS = /* write code here! */ ;
  var lolcatImageJS = /* write code here! */;
  
  if (time == partyTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeupTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon) {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening) {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  //TODO: CREATE CONSOLE MESSAGE FOR messageText
  /* write code here! */
  
  /* TODO: SET timeEventJS text TO messageText
           SET lolcatImage TO time specific images! */
  
  /*write code here! */
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// TODO: SELECT partyTimeButton 
var partyButton = /* write code here! */;

var partyEvent = function() {
    //PARTY OVER
    if (partyTime < 0) {
        partyTime = new Date().getHours();
        
      /* TODO: CHANGE partyTimeButton TEXT
               CHANGE partyTimeButton BACKGROUND COLOR */
      
      /* write code here! */
      
       
    }
    else {
        //PARTY TIME
        partyTime = -1;
        /* TODO: CHANGE partyTimeButton TEXT
               CHANGE partyTimeButton BACKGROUND COLOR */
      
      /* write code here! */
    }
};

//TODO: CLICK BUTTON FUNCTIONALITY

// write code here!

partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  /* write code here */;

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  /* write code here */;

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};


lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  /* write code here */;

var napEvent = function() {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);