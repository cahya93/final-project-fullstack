const API_BASE_URL = "http://yantodev.ddns.net:8080/";

class apiBackend {
  getAllData = () => {
    return fetch(API_BASE_URL + "eats/viewall", {
      method: "GET",
    })
      .then(function (respon) {
        console.log(`respon`, respon);
        return respon.json();
      })
      .then(function (data) {
        let allData = JSON.parse(JSON.stringify(data));
        console.log("api data", allData);
        return allData;
      });
  };
}

export default new apiBackend();
