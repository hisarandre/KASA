const accommodationsData = "../../data/accommodations.json";

export async function getAccommodations() {
  try {
    const response = await fetch(accommodationsData);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
