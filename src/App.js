import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from 'pages/Layout';

if (process.env.REACT_APP_DEBUG === '1') {
    console.log('DEBUG ON!');
}

class App extends Component {
  render() {
    return (
      <Router>
          <Layout>

            {/* <Switch>
              <Route exact={true} path="/" component={PageHome}/>
              <Route path="/data-pendaftar" component={PageDataPendaftar}/>
              <Route path="/hasil-seleksi" component={PageHasilSeleksi}/>
              <Route path="/info-sekolah" component={PageInfoSekolah}/>
              <Route path="/rekapitulasi" component={PageRekapitulasi}/>
              <Route path="/statistik" component={PageStatistik}/>
              <Route path="/credits" component={PageCredits}/>
              <Route path="/search" component={PageSearch}/>
              <Route path="/detail/:registrationId" component={PageDetail}/>
              <Route path="/berita/:permalink" component={PageBerita}/>
              <Route component={PageNotFound} />
            </Switch> */}

          </Layout>
      </Router>
    );
  }
}

export default App;
