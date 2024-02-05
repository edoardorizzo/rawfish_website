const apiUrl = "https://randomuser.me/api/";
const cache = {};

export const fetchUsers = async (results = 50) => {
  try {
    if (cache[results]) {
      return cache[results];
    }

    const res = await fetch(`${apiUrl}?results=${results}`);
    const { results: fetchedResults } = await res.json();

    cache[results] = fetchedResults;
    console.log(`Data for ${results} results saved in cache:`, fetchedResults);

    return fetchedResults;
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    throw error;
  }
};
