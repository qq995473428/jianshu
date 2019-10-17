import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style';
import { GlobalstyleIcon } from './static/iconfont/iconfont';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './common/header/index';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
class App extends Component {
    render() {
        return (
            <Fragment>
                <Globalstyle />
                <GlobalstyleIcon />
                <Provider store={store}>
                    <BrowserRouter>
                        <Header />
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/detail/:id' component={Detail}></Route>
                        <Route exact path='/login' component={Login}></Route>
                        <Route exact path='/write' component={Write}></Route>
                    </BrowserRouter>
                </Provider>
            </Fragment>
        )
    }
}

export default App;