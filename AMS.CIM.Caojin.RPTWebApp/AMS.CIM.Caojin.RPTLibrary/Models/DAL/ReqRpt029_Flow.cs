﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AMS.CIM.Caojin.RPTLibrary.Models
{
    public class ReqRpt029_Flow
    {
        public string MainPD_ID { get; set; }

        public string Ope_No { get; set; }

        public string PD_ID { get; set; }

        public double PD_Std_Proc_Time_Min { get; set; }

        public string Eqp_Type { get; set; }

        public string Description { get; set; }
    }
}