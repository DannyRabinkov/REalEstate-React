const getElemVal = (id) => document.getElementById(id).value;

export default function validateSignUp(idName, idEmail, idPassword) {
  let error = "";
  var data = {
    name: getElemVal(idName),
    email: getElemVal(idEmail),
    password: getElemVal(idPassword),
    biz: false,
  };

  if (!data.password || data.password.length < 6) {
    error = `*Password must has 6 letters  *`;
  }

  if (data.email) {
    var reges =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res = reges.test(data.email);
    if (!res) {
      error += "Must enter  valid email   *";
    }
  } else {
    error += "Must enter  valid email   *";
  }
  if (!data.name || data.name.length < 2) {
    error += "Name must have at least two letters";
  }

  return error || data;
}
