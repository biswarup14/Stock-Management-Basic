using StockWebApi.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StockWebApi.Controllers
{
    public class StocksController : ApiController
    {

        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();

            string query = @"select StockID, StockName, Department, Quantity,
                                        convert(varchar(10),StockAdditionDate,120)as StockAdditionDate from dbo.Stocks";

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["StockManagementDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Stocks st)
        {
            try
            {
                DataTable table = new DataTable();

                string StockAdditionDate = st.StockAdditionDate.ToString().Split(' ')[0];

                string query = @"insert into dbo.Stocks(StockName,Department,Quantity,StockAdditionDate)
                                                values('" + st.StockName + @"',
                                                           '" + st.Department + @"',
                                                           '" + st.Quantity + @"',
                                                           '" + st.StockAdditionDate + "'@ )";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["StockManagementDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Added Successfully";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }
        }
        public string Put(Stocks st)
        { 
        try
            {
                DataTable table = new DataTable();
                                string query = @"
                                   update dbo.Stocks set 
                                   StockName = ' " + st.StockName + @" ',
                                    Department = ' " + st.Department + @" ',
                                     Quantity = ' " + st.Quantity + @" ',
                                      StockAdditionDate=' " + st.StockAdditionDate + @" ' where StockID=" + st.StockID+ @"";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["StockManagementDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Successfully";
                }
            catch (Exception)
                {
                         return "Failed to update";
                        }
        }
        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"delete from dbo.Stocks where StockID=" + id;

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["StockManagementDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Deleted Successfully";
            }
            catch (Exception)
            {
                return "Failed to delete";
            }
        }
        }
 }

