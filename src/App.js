import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <React.Suspense fallback={<Preloader/>}>
                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>
                        <Route path="/users"
                               render={() => <UsersContainer/>}/>
                        <Route path="/login"
                               render={() => <LoginPage/>}/>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return(
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </HashRouter>
        </React.StrictMode>
    )
}

export default SamuraiJSApp;