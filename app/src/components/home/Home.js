import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Appbar from './appbar';
import Sidebar from './sidebar';
import Dashboard from './pages/dashboard';
import Notifications from './pages/notifications';
import Titles from './pages/titles';
import Profile from './pages/profile';
import Transfer from './pages/transfer';
import TitleDetails from './pages/titledetails';
import Search from './pages/search';
import Mailosearch from './pages/mailo';
import Leasehold from './pages/lease';
import Freehold from './pages/freehold';


function Home() {
    return (
        <div className='home-page'>
            <Appbar/>
            <div className='wrapper'>
                <Sidebar/>
                  <div style={{padding:'20px',width:'100%',position:'relative',overflowY:'visible'}}> 
                    <Switch>
                        <Route path='/Home/' exact  component={Dashboard}/>
                        <Route path='/Home/Titles/'  component={Titles}/>
                        <Route path='/Home/notifications/'  component={Notifications}/>
                        <Route path='/Home/profile/'  component={Profile}/>
                        <Route path='/Home/landtransfer/'  component={Transfer}/>
                        <Route path='/Home/Search/'  component={Search}/>
                        <Route path='/Home/mailoland/'  component={Mailosearch}/>
                        <Route path='/Home/leasehold/'  component={Leasehold}/>
                        <Route path='/Home/freehold/'  component={Freehold}/>
                        <Route path='/Home/Titles:id'  component={TitleDetails}/>
                    </Switch>
                </div>
            </div>          
        </div>
    )
}

export default Home
