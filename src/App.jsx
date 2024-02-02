import { useState, useEffect } from "react";
import MainContainerComponent from "./container/MainContainerComponent";
import UserListComponent from "./components/UserListComponent";
import SearchBarComponent from "./components/SearchBarComponent";
import "./App.scss";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=50");
      const { results } = await res.json();

      if (results.length === 0) {
        setHasMore(false);
      } else {
        setUsers([...users, ...results]);
      }
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filteredResults = users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(query.toLowerCase()) ||
        user.name.last.toLowerCase().includes(query.toLowerCase()) ||
        user.location.city.toLowerCase().includes(query.toLowerCase()) ||
        user.location.country.toLowerCase().includes(query.toLowerCase()) ||
        user.location.state.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredUsers(filteredResults);
  };

  return (
    <>
      <SearchBarComponent onSearch={handleSearch} />
      <MainContainerComponent>
        <UserListComponent
          users={users}
          filteredUsers={filteredUsers}
          fetchData={fetchData}
          hasMore={hasMore}
        />
      </MainContainerComponent>
    </>
  );
}

export default App;
