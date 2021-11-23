import { getLikedDB, addLikedDB, isLoggedIn } from "./javascriptHelpers";

export function getLiked(callback) {
  let likedCardsArr = getLikedLocal(callback);

  /*   let likedCardsArr = [];
  if (isLoggedIn()) {
    likedCardsArr = getLikedDB(callback);
  } else {
    likedCardsArr = getLikedLocal(callback);
  }
 */

  callback(likedCardsArr);
}

export function addLiked(cardObject, callback) {
  addLikedLocal(cardObject, callback);
  /* 
  if (isLoggedIn()) {
    addLikedDB(cardObject, callback);
  } else {
    addLikedLocal(cardObject, callback);
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

function addLikedLocal(cardObject, callback) {
  // get list from local storage => X
  // add liked item to X
  // save new X to local storage
  // callback
  let likedList = getLikedLocal();
  likedList.push(cardObject);
  localStorage.setItem("LikedCards", JSON.stringify(likedList));
  callback();
}
