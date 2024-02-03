const apiUrl = "https://randomuser.me/api/";

export const fetchUsers = async (results = 50) => {
  try {
    const res = await fetch(`${apiUrl}?results=${results}`);
    const { results: fetchedResults } = await res.json();
    return fetchedResults;
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    throw error;
  }
};
