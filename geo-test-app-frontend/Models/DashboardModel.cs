using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;

namespace geo_test_app_frontend.Models
{
    public class DashboardModel
    {
        public IEnumerable<DashboardItemModel> Items { get; set; }

        public DashboardModel()
        {
            var url = "https://taylorgeothermtest.azurewebsites.net/api/dashboard";
            var httpRequest = (HttpWebRequest)WebRequest.Create(url);
            httpRequest.Accept = "application/json";

            var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
            using var streamReader = new StreamReader(httpResponse.GetResponseStream());
            var result = streamReader.ReadToEnd();

            Items = JsonConvert.DeserializeObject<IEnumerable<DashboardItemModel>>(result);
        }
    }
}
