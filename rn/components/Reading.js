import axios from "axios";

export default class Reading {
  getReading(book, chapter, verse) {
    console.log(axios);
    axios
      .get("http://labs.bible.org/api/?passage=John%203:16&type=json", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
