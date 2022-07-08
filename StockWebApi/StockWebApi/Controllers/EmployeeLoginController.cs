using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StockWebApi.Controllers;
using StockWebApi.Models;

namespace StockWebApi.Controllers
{
    [RoutePrefix("api/employee")]
    public class EmployeeLoginController : ApiController
    {
        StockManagementDBEntities DB = new StockManagementDBEntities();
        [Route("Login")]
        [HttpPost]
        public IHttpActionResult employeeLogin(Login login)
        {
            var log = DB.EmployeeLogins.Where(x => x.Email.Equals(login.Email) && x.Password.Equals(login.Password)).FirstOrDefault();

            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
        }
        [Route("InsertEmployee")]
        [HttpPost]
        public object InsertEmployee(Register Reg)
        {
            try
            {

                EmployeeLogin EL = new EmployeeLogin();
                if (EL.Id == 0)
                {
                    EL.EmployeeName = Reg.EmployeeName;
                    EL.City = Reg.City;
                    EL.Email = Reg.Email;
                    EL.Password = Reg.Password;
                    EL.Department = Reg.Department;
                    DB.EmployeeLogins.Add(EL);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Record SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
    }
}
