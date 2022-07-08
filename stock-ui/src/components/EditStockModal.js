import React, { Component } from 'react'
import {Modal,Button,Row,Form,Col} from "react-bootstrap"

export default class EditStockModal extends Component {

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    componentDidMount(){
        fetch("https://localhost:44372/api/Department")
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

        handleSubmit(event){
            event.preventDefault();
            fetch("https://localhost:44372/api/Stocks",{
              method:"PUT",
              headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify({
                StockID:event.target.StockID.value,
                StockName: event.target.StockName.value,
                Department: event.target.Department.value,
                Quantity: event.target.Quantity.value,
                StockAdditionDate: event.target.StockAdditionDate.value
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
            Edit Stock
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <div className="container">
  
        <Row>
            <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="StockID">
                    <Form.Label>StockID</Form.Label>
                    <Form.Control type="text" name="StockID" required disabled 
                    defaultValue={this.props.empid}
                    placeholder="StockID"/>
                </Form.Group>

                <Form.Group controlId="StockName">
                    <Form.Label>StockName</Form.Label>
                    <Form.Control type="text" name="StockName" required 
                    defaultValue={this.props.empname}
                    placeholder="Stock Name"/>
                </Form.Group>

                <Form.Group controlId="Department">
                    <Form.Label>Department</Form.Label>
                    <Form.Control as="select" defaultValue={this.props.depmt}>
                        {this.state.deps.map(dep=>
                            <option key={dep.DepartmentID}>{dep.DepartmentName}</option>
                            )}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="Quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" name="Quantity" required 
                    defaultValue={this.props.qty}
                    placeholder="Quantity"/>
                </Form.Group>

                <Form.Group controlId="StockAdditionDate">
                    <Form.Label>StockAdditionDate</Form.Label>
                    <Form.Control type="date" name="StockAdditionDate" required 
                    defaultValue={this.props.stockadd}
                    placeholder="StockAdditionDate"/>
                </Form.Group>

                <Form.Group>
                    <Button variant="primary" type="submit">
                        Update Stock
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
