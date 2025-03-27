export default async function data() {
  try {
    let response = await fetch(
      "https://67640a5117ec5852caeaf18d.mockapi.io/v1/products"
    );
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
