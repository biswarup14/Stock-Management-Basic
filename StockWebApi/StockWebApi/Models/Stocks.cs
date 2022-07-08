using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StockWebApi.Models
{
    public class Stocks
    {
        public long StockID { get; set; }
        public string StockName { get; set; }
        public string Department { get; set; }
        public string Quantity { get; set; }
        public DateTime? StockAdditionDate { get; set; }
    }
}