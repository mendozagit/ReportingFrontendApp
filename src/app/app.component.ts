import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css",]
})

export class AppComponent {


    /**
     *
     */
    constructor(private router:Router) {}
    title = 'Angular Designer Sample';

    // If you use the ASP.NET Core backend:
    getDesignerModelAction = "/DXXRD/GetDesignerModel"
    // If you use the ASP.NET MVC backend:

    //getDesignerModelAction = "/ReportDesigner/GetReportDesignerModel";

    // The report name.
    reportName = "Report1";

    // The backend application URL.
    host = 'https://localhost:7071/';



    onReportDesignerClick() {
      this.router.navigate(['report-designer']);
    }
    onReportViewerClick() {
      // Open the report in the Web Document Viewer. path: '/report-viewer'
      this.router.navigate(['report-viewer']);
 }
}
