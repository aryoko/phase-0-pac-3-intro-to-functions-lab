function shout(string) {
  let newString = string.toUpperCase();
  return newString;
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
  switch(true) {
    case (string === string.toLowerCase()):
      return "I can't hear you!";
    case (string === string.toUpperCase()):
      return "YES INDEED!";
    case (string === "Let's have dinner together!"):
      return "I would love to!";
  }
}

/*
console.log(sayHiToHeadphonedRoommate("lets get groovy"));
console.log(sayHiToHeadphonedRoommate("LETS GET GROOVY"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
*/