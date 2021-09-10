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
  //get by lokasi
  getLokasi = () => {
    return fetch(API_BASE_URL + "eats/viewbylokasi", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
      },
      mode: "no-cors",
      body: JSON.stringify({
        id_lokasi: 2,
      }),
    })
      .then((response) => response.text())
      .then((data) => console.log("cek", data))
      .catch((error) => console.log("Error detected: " + error));
  };
}

export default new apiBackend();
