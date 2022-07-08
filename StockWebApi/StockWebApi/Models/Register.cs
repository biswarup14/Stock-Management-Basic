﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace StockWebApi.Models
{
    public class Register
    {
        public int Id { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [DataType(DataType.Password)]
        public string Password{ get; set; }
        public string  EmployeeName { get; set; }
        public string City { get; set; }
        public string Department { get; set; }
    }
}