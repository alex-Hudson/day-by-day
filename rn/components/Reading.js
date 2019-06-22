import axios from "axios";

export default class Reading {
  async getReading(book, chapter, verse) {
    const response = await axios.get(
      "http://labs.bible.org/api/?passage=John%203:16&type=json",
      {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
    );

    console.log(response.data[0].text);
    return response.data[0].text;
  }
}
