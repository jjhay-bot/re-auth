import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { UserInfoPage } from "./pages/UserInfoPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Private */}
        <PrivateRoute path="/" exact>
          <UserInfoPage />
        </PrivateRoute>
        {/* Public & Not Auth*/}
        <Route path="/login" exact>
          <LogInPage />
        </Route>
        {/* Public */}
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
};
