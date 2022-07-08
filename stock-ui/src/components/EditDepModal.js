import React, { Component } from 'react'
import { Modal,Button,Col,Row,Form } from 'react-bootstrap'

export default class EditDepModal extends Component {

    constructor(props){
        super(props);
    }
    handleSubmit(event){
      event.preventDefault();
      fetch("https://localhost:44372/api/Department",{
        method:"PUT",
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          DepartmentID:event.target.DepartmentID.value,
          DepartmentName: event.target.DepartmentName.value
        })
      })
      .then(res => res.json())
        .then((result)=>{
            alert(result)
        },
        (error)=>{
            alert('Failed')
        })
    }
  render() {
    return (
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Department
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <div className="container">
  
        <Row>
            <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="DepartmentID">
                    <Form.Label>DepartmentID</Form.Label>
                    <Form.Control type="text" name="DepartmentID" required disabled 
                    defaultValue={this.props.depid}
                    placeholder="Department ID"/>
                </Form.Group>

                <Form.Group controlId="DepartmentName">
                    <Form.Label>DepartmentName</Form.Label>
                    <Form.Control type="text" name="DepartmentName" required 
                    defaultValue={this.props.depname}
                    placeholder="Department Name"/>
                </Form.Group>
  
                <Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form.Group>
            </Form>
            </Col>
        </Row>
  
        </div>
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
