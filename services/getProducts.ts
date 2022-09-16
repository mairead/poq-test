const getProducts = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e",
    {
      method: "GET",
    },
  );

  const data = await response.json();
  if (response.ok) {
    return {
      data,
    };
  } else {
    return { error: data.message };
  }
};

export default getProducts;
