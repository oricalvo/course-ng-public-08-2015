using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace HelloWorld.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Layout()
        {
            return View();
        }

        public ActionResult Home()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Clock()
        {
            return View();
        }
    }
}