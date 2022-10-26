import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./views/NotFound/NotFound";
import AuthFalse from "./auth.false";
import Auth from "./auth.true";

const App = () => {
  const [sessionData, setsessionData] = useState();

  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem("session"));
    if (session) {
      setsessionData(session);
    }
  }, []);

  let auth = sessionData.email
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          { auth ? (
              <Route path="/home" name="auth" element={<Auth />} />
            ) : (
              <Route path="/login" name="login" element={<AuthFalse />} />
            )};
          <Route path="*" name="error404" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
