import "./partials/AppStyle.scss";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchUsersWithCache } from "./js/userSlice";
import { useSelector, useDispatch } from "react-redux";
import MainContainerComponent from "./container/MainContainerComponent";
import RightContainerComponent from "./container/RightContainerComponent";
import SidebarComponent from "./components/SidebarComponent";
import UserListComponent from "./components/UserListComponent";
import UserDetailPage from "./view/UserDetailPage";

function App() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      dispatch(fetchUsersWithCache());
    } catch (error) {
      console.error("Errore", error);
    }
  };

  useEffect(() => {
    dispatch(fetchUsersWithCache());
  }, [dispatch]);

  

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainContainerComponent>
              <SidebarComponent/>
              <RightContainerComponent>
                <UserListComponent
                  users={users}
                  fetchData={fetchData}
                />
              </RightContainerComponent>
            </MainContainerComponent>
          }
        />
        <Route
          path="/user/:userId"
          element={<UserDetailPage users={users} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
