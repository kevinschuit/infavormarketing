import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BlogOverview from './components/BlogOverview';
import BlogPost from './components/BlogPost';
import Page from './components/Page';
import Navigation from './components/Navigaton';
import Loading from './components/common/Loading';
import FadeIn from './components/common/FadeIn'
import { getPages } from './services/pageService';


class App extends Component {
  state = {
    pages: {},
    isLoaded: false
  }

  async componentDidMount() {
    const { data: pages } = await getPages();
    this.setState({ pages, isLoaded: true });
  }

  render() {
    const { pages, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <React.Fragment>
          <FadeIn />
          <Navigation pages={this.state.pages} />
          <Switch>
            {pages.map(page => (
              <Route key={page.id} exact path={`/${page.slug === 'home' ? '' : page.slug}`} component={Page} getImage={this.getImage} />
            ))}
            <Route exact path="/blog" component={BlogOverview} />
            <Route exact path="/blog/:id" component={BlogPost} />
          </Switch>
        </React.Fragment>
      );
    }
    return <Loading />
  }
}

export default App;
