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

export function isCardLikded(cardId) {
  let isLiked = false;

  /* 
  if (isLoggedIn()) {
    isCardLikedDB(cardId);
  } else {
    isCardLikedLocal(cardId);
  } */
  isLiked = isCardLikedLocal(cardId);
  return isLiked;
}

function isCardLikedLocal(cardId) {
  let likedList = getLikedLocal();
  let card = likedList.find((card) => card._id === cardId);
  if (typeof card !== "undefined") {
    return true;
  }
  return false;
}

export function removedLiked(cardId, callback) {
  removeLikedLocal(cardId, callback);
  /* 
  if (isLoggedIn()) {
    removeLikedDB(cardObject, callback);
  } else {
    removeLikedLocal(cardObject, callback);
  } */
}

function removeLikedLocal(cardId, callback) {
  let likedList = getLikedLocal();
  let index = likedList.indexOf((card) => card._id === cardId);
  likedList.splice(index, 1);
  localStorage.setItem("LikedCards", JSON.stringify(likedList));
  callback();
}
