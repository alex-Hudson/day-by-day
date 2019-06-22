import axios from "axios";

export default class Reading {
  async getReading(reference) {
    const response = await axios.get(
      `http://labs.bible.org/api/?passage=${reference}&type=json`,
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
