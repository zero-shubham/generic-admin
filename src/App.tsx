import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, AdvertisersPage, BannersPage, LoginPage } from "pages";
import TopProgressBar from "components/TopProgressBar";

function App(): JSX.Element {
  return (
    <Suspense fallback={<TopProgressBar />}>
      <Router>
        <Switch>
          <Route path="/advertisers">
            <AdvertisersPage />
          </Route>
          <Route path="/banners">
            <BannersPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
