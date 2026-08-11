const API_URL = "https://fakestoreapi.com/product";

export const getGalleryItems = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch gallery data");
  }

  const data = await response.json();

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
    category: item.category,
  }));
};