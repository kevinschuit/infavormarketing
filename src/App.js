import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import BlogOverview from './components/BlogOverview'
import BlogPost from './components/BlogPost'
import Page from './components/Page'
import Navigation from './components/Navigaton'
import './scss/styles.scss';

class App extends Component {
  state = {
    pages: {},
    isLoaded: false
  }

  componentDidMount() {
    axios.get(`wordpress/wp-json/wp/v2/pages/`)
      .then(res => this.setState({
        pages: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err))
  }

  render() {
    const { pages, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <React.Fragment>
          <Navigation pages={this.state.pages} />
          <Switch>
            {pages.map(page => (
              <Route key={page.id} path={`/${page.slug === 'home' ? '' : page.slug}`} component={Page} />
            ))}
            <Route exact path="/blog" component={BlogOverview} />
            <Route exact path="/blog/:id" component={BlogPost} />
          </Switch>
        </React.Fragment>
      );
    }
    return <h3>Loading...</h3>
  }
}

export default App;
