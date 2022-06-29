export const getCharacters = async () => {
    const response = await fetch("https://kodemia-18g-default-rtdb.firebaseio.com/");
    const data = await response.json();
    return data;
  };

  // const data = await response.json();


  // fetch("https://kodemia-18g-default-rtdb.firebaseio.com/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "Aplication/JSON"
  //   },

  //   B

  // });
