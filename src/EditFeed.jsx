import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';

import { Segment, Tab, Label, Icon, Button } from 'semantic-ui-react';
class EditFeed extends Component {
    render() {
        return (
            <MDBCard className="m-3" style={{ maxWidth: "100%" }}>
                <MDBCardHeader>

                    <MDBIcon icon="pen" size="lg" className="float-right ml-3"></MDBIcon>
                    <span className="float-right">أنشاء منشور جديد</span>
                </MDBCardHeader>
                <MDBCardBody className="text-primary" >

                    <div className="input-group">

                        <textarea className="form-control text-right pt-5" style={{ msTextSizeAdjust: 'auto', border: 'none' }} placeholder="ماذا يخطر في بالك" rows="3"></textarea>
                        <div className="input-group-prepend">
                            <span className="input-group-text white" style={{ border: 'none' }}>
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                    alt=""
                                    width="50px"
                                    height="50px"
                                    className="rounded-circle "
                                />
                            </span>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="float-right d-inline-block p-4 d-wrap grey-text" style={{ outlineStyle: 'dashed', maxWidth: "150px" }}>
                        اكتب او اضف الهاشتاغ المناسب هنا
  </div>
                    <div className="grey-text">
                        <Label style={{ marginBottom: '3px' }} as='a' >
                            توجيهي علمي
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            توجيهي ادبي
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                انظمة معلومات محاسبيه 
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            دورات 
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            هندسة الميكاترونكس  
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            جو اكاديمي 
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            هندسة طبية 
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            جو  
    <Icon name='delete' />
                        </Label>
                        <Label style={{ marginBottom: '3px' }} as='a'>
                            تكنلوجيا المعلومات 
    <Icon name='delete' />
                        </Label>
                    
                 


                    </div>

                    <hr></hr>

                    <MDBRow>
                        <MDBCol>
                            <Button style={{ borderRadius: '12px' }} primary color='blue'>
                            انشر
  </Button>
                        </MDBCol>
                        <MDBCol className="text-right">
                            <Button style={{ borderRadius: '12px' }} basic color='blue'>
                                أضف فيديو
       <MDBIcon icon="video" size="sm" className="ml-3"></MDBIcon>
                            </Button>
                            <Button style={{ borderRadius: '12px' }} basic color='blue'>
                                أضف صورة
        <MDBIcon icon="image" size="sm" className="ml-3"></MDBIcon>
                            </Button>
                        </MDBCol>
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>

        );
    }

}

export default EditFeed;