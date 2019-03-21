import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComputeIO from './ComputeIO'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from './NavBar';
import SideBar from './SideBar';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';
import ProfileCard from './ProfileCard';
import Footer from './Footer';
import TabbbedFeeds from './TabbedFeeds';
import { Segment, Tab, Label, Icon, Button } from 'semantic-ui-react';
import EditFeed from './EditFeed';
import Feed from './Feed';
import LeftSideBar from './LeftSideBar';
import imgee from './icons/hqdefault.png';


class App extends Component {
  render() {
    return (
      <div className="grey lighten-5">
        <NavBar></NavBar>


        <MDBRow >
          <MDBCol className="grey lighten-5" >

            <MDBRow>
              <MDBCol>
                <div className="float-right w-auto">
                  <span>الأصدقاء المتصلين</span>
                  <MDBIcon far icon="user" className="m-4 grey-text text-right" size="2x"></MDBIcon>
                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow className="float-right mr-5 d-block">
              <MDBCol>
                <div className="d-flex flex-row" >
                  <div className="p-1">  <ProfileCard></ProfileCard></div>
                  <div className="p-1">  <ProfileCard></ProfileCard></div>
                  <div className="p-1">  <ProfileCard></ProfileCard></div>
                 

                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow className="w-100 text-center">
              <MDBCol>
                <TabbbedFeeds></TabbbedFeeds>
              </MDBCol>
            </MDBRow>

            <MDBRow className="w-100 text-center">
             
                  <LeftSideBar></LeftSideBar>
           

              <MDBCol className="m-3">
               <Segment raised>
               <img  width="100%" height="400px" src={imgee}></img>
               </Segment>
                  
              
               <EditFeed/>

               <Feed></Feed>
              </MDBCol>

            </MDBRow>
          </MDBCol>




          <MDBCol size="2" className="h-auto white shadow-box-example z-depth-3">
            <SideBar></SideBar>
          </MDBCol>
          
    
          
        </MDBRow>


        <MDBRow  className="mt-4">
      <MDBCol size="12">
        <Footer></Footer>
        </MDBCol>
</MDBRow>

      </div>






    );
  }
}

export default App;
