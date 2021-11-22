import { getLikedDB, addLikedDB, isLoggedIn } from "./javascriptHelpers";

export function getLiked(callback) {
  let likedCardsArr = [];
  if (isLoggedIn()) {
    likedCardsArr = getLikedDB(callback);
  } else {
    likedCardsArr = getLikedLocal(callback);
  }

  let cardsElems = [];
  likedCardsArr.forEach((element) => {
    //TODO get card (json) from db, by id (=element)
    //TODO push res (json) to cardsElems
  });
  //TODO callback(cardsElems)
  //TODO CHECK THAT CALLBACK HAPPENS ONLY AFTER ALL CARDS ARE RECIEVED FROM DB
}

export function addLiked(cardId, callback) {
  addLikedLocal(cardId, callback);
  /* 
  if (isLoggedIn()) {
    addLikedDB(cardId, callback);
  } else {
    addLikedLocal(cardId, callback);
  } */
}

function getLikedLocal() {
  let likedList = [];
  if (localStorage.getItem("LikedCards") != null) {
    // if has items in liked at local storage
    likedList = JSON.parse(localStorage.getItem("LikedCards"));
  }
  return likedList;
}

function addLikedLocal(cardId, callback) {
  // get list from local storage => X
  // add liked item to X
  // save new X to local storage
  // callback
  let likedList = getLikedLocal();
  likedList.push(cardId);
  localStorage.setItem("LikedCards", JSON.stringify(likedList));
  callback();
}
