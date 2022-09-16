const deleteProducts = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e",
    {
      method: "DELETE",
    },
  );

  const data = await response.json();
  if (response.ok) {
    return {
      // will this return updated array of products?
    };
  } else {
    return { error: data.message };
  }
};

export default deleteProducts;
