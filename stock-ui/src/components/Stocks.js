import React, { Component } from 'react'
import {Button, ButtonToolbar, Table} from 'react-bootstrap'
import AddStockModal from './AddStockModal';
import EditStockModal from './EditStockModal';

export default class Stocks extends Component {


  
  constructor(props){
    super(props);
    this.state={emps:[], addModalShow:false, editModalShow:false}
}
  componentDidMount(){
    this.refreshList();
  }

  deleteEmp(empid)
  {
      if(window.confirm("Are you Sure?"))
      {
          fetch("https://localhost:44372/api/Stocks/"+empid,{
              method:"DELETE",
              header:{'Accept':'application/json',
              'Content-Type':'application/json'
      }
          })
      }
  }
refreshList()
  {
      fetch("https://localhost:44372/api/Stocks")
      .then(response => response.json())
      .then(data =>{
          this.setState({emps:data});
      });
  }
  componentDidUpdate(){
    this.refreshList();
}


  render() {
    const{emps, empid, empname,depmt,qty,stockadd} =this.state;
    let addModalClose= () => this.setState({addModalShow: false});
    let editModalClose= () => this.setState({editModalShow: false});

    return (
      <div>
      <Table className="mt-4" striped bordered hover size="small">
          <thead>
              <tr>
                  <th>StockID</th>
                  <th>StockName</th>
                  <th>Department</th>
                  <th>Quantity</th>
                  <th>StockAdditionDate</th>
                  <th>Options</th>
              </tr>
          </thead>
          <tbody>
              {emps.map(emp => <tr key={emp.StockID}>
                  <td>{emp.StockID}</td>
                  <td>{emp.StockName}</td>
                  <td>{emp.Department}</td>
                  <td>{emp.Quantity}</td>
                  <td>{emp.StockAdditionDate}</td>
                  <td>
                      <ButtonToolbar>
                          <Button className='mr-2' variant="info" 
                      onClick={()=> this.setState({editModalShow:true,empid:emp.StockID,empname:emp.StockName,
                                depmt:emp.Department, qty:emp.Quantity, stockadd:emp.StockAdditionDate
                                })}>
                             Edit
                          </Button>
  
                      <Button className='mr-2' 
                      onClick={()=>this.deleteEmp(emp.StockID)} variant="danger">
                          Delete
                      </Button>
  
                         <EditStockModal
                         show={this.state.editModalShow}
                         onHide={editModalClose}
                         empid={empid}
                        empname={empname}
                        depmt={depmt}
                        qty={qty}
                        stockadd={stockadd}
                         /> 
                      </ButtonToolbar>
                  </td>
              </tr>
              )}
          </tbody>
      </Table>
      <ButtonToolbar>
                      <Button variant="primary" onClick={()=>this.setState({addModalShow: true})}>
                          Add Stock
                      </Button>
                      <AddStockModal show={this.state.addModalShow}
                      onHide={addModalClose}
                      />
                      </ButtonToolbar>
              </div>
    )
  }
}
