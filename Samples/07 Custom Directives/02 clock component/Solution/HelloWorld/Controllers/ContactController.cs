using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace HelloWorld.Controllers
{
    public class ContactController : ApiController
    {
        public IEnumerable<Contact> Get()
        {
            return new Contact[] 
            {
                new Contact(){ID=1, Name="Ori"}, 
                new Contact(){ID=2, Name="Roni"},
            };
        }
   }

    public class Contact
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string EMail { get; set; }
    }
}