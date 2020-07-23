import React from 'react'

import {HashRouter, Switch, Route} from 'react-router-dom'

import App from './App'
import ImageView from './ImageView/ImageView'

const Router = () => {

    return (

        <HashRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/image/:id" component={ImageView} />
            </Switch>
        </HashRouter>
    )

}


export default Router