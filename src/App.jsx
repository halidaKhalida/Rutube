import PublicRoutest from "./routest/PublicRoutest";
import PrivateRoutest from "./routest/PrivateRoutest";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Link } from "react-router-dom";

function App() {
  const { isAuth } = useContext(AuthContext);

  return <div className="  ">
    {isAuth ? <PrivateRoutest /> : <PublicRoutest />}
    </div>;
}

export default App;
