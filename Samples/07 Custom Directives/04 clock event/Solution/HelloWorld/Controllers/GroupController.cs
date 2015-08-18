using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading;
using System.Web.Http;

namespace HelloWorld.Controllers
{
    public class GroupController : ApiController
    {
        public IEnumerable<Group> Get()
        {
            return new Group[] 
            {
                new Group(){ID=1, Name="Friends"}, 
                new Group(){ID=2, Name="Co-Workers"},
            };
        }
   }

    public class Group
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}