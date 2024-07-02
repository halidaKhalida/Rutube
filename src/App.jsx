import PublicRoutest from "./routest/PublicRoutest";
import PrivateRoutest from "./routest/PrivateRoutest";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { isAuth } = useContext(AuthContext);

  return <div className="  ">{isAuth ? <PrivateRoutest /> : <PublicRoutest />}</div>;
}

export default App;
