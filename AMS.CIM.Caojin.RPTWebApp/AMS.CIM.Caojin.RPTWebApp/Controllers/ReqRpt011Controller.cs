﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AMS.CIM.Caojin.RPTWebApp.Models;

namespace AMS.CIM.Caojin.RPTWebApp.Controllers
{
    public class ReqRpt011Controller : Controller
    {
        // GET: ReqRpt011
        public ActionResult Index()
        {
            ViewBag.ClickCount = CommonController.GetCount("RPT000011");
            return View();
        }

        public ActionResult GetTableData(string month,List<string>prods)
        {
            var builder = new ReqRpt011TableDataBuilder(month,prods);
            var response = new { success=true,shipData=builder.ShipEntities,wipData=builder.WipEntities,items=builder.Items};
            return Json(response);
        }

        public JsonResult HandlePlanTableByCmd(string prod, string month, int fromDate, int toDate, int value,string planType)
        {
            var arry = month.Split('-');
            int y = Convert.ToInt16(arry[0]);
            int m = Convert.ToInt16(arry[1]);
            int maxDay = DateTime.DaysInMonth(y, m);
            int toDay = toDate > maxDay ? maxDay : toDate;
            var handle = new ReqRpt011PlanSetHandler();
            if (fromDate == 1 && toDay == maxDay) { handle.SetValueByMonth(prod, y, m, value,planType); }
            else
            {
                string from = month + "-" + (fromDate >= 10 ? fromDate.ToString() : "0" + fromDate);
                string to = month + "-" + (toDay >= 10 ? toDay.ToString() : "0" + toDay);
                handle.SetValueByDateRange(prod, from, to, value,planType);
            }
            return Json(new { success = true });
        }

        public JsonResult GetLotDetail(List<string>lots,string type)
        {
            var builder = new ReqRpt011LotDetailBuilder(lots,type);
            var response = new { success = true, builder.LotEntities };
            return Json(response);
        }
    }
}