using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Net;

namespace geo_test_app_frontend.Models
{
    public class DashboardItemModel
    {
        [Display(Name = "Sample ID")]
        public int SampleId { get; set; }
        [Display(Name = "Date Submitted")]
        public DateTime Date { get; set; }
        [Display(Name = "Sent By")]
        public string SentBy { get; set; }
        [Display(Name = "Project Name")]
        public string ProjectName { get; set; }
        [Display(Name = "Project Number")]
        public int ProjectNumber { get; set; }
        [Display(Name = "PO Number")]
        public string PoNumber { get; set; }
        [Display(Name = "Contact Name")]
        public string ContactName { get; set; }
        [Display(Name = "Contact Email")]
        public string ContactEmail { get; set; }
        [Display(Name = "Material Type")]
        public string Type { get; set; }
        [Display(Name = "Proctor?")]
        public bool? Proctor { get; set; }
        [Display(Name = "Testing Instructions?")]
        public bool? TestingInstructions { get; set; }
        [Display(Name = "Notes")]
        public string Notes { get; set; }
        [Display(Name = "Rush?")]
        public bool? Rush { get; set; }
        [Display(Name = "Status")]
        public string Status { get; set; }
        [Display(Name = "Action")]
        public string Action { get; set; }
    }
}
