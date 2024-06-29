import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { DxReportDesignerModule } from 'devexpress-reporting-angular';
import 'devexpress-reporting/dx-richedit';

@Component({
  selector: 'report-designer',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DxReportDesignerModule],
  templateUrl: './report-designer.component.html',
  styleUrls: [
    "../../../node_modules/ace-builds/css/ace.css",
    "../../../node_modules/ace-builds/css/theme/dreamweaver.css",
    "../../../node_modules/ace-builds/css/theme/ambiance.css",
    "../../../node_modules/devextreme/dist/css/dx.light.css",
    "../../../node_modules/devexpress-richedit/dist/dx.richedit.css",
    "../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    "../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
    "../../../node_modules/@devexpress/analytics-core/dist/css/dx-querybuilder.css",
    "../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css",
    "../../../node_modules/devexpress-reporting/dist/css/dx-reportdesigner.css"
]
})

export class ReportDesignerComponent {

    /**
     *
     */
    constructor(private router:Router) {}
    title = 'DXReportDesignerSample';
    // If you use the ASP.NET Core backend:
    getDesignerModelAction = "/DXXRD/GetDesignerModel"
    // If you use the ASP.NET MVC backend:
    //getDesignerModelAction = "/ReportDesigner/GetReportDesignerModel";
    // The report name.
    reportName = "Report1";
    // The backend application URL.
    host = 'https://localhost:7071/';


    ViewReport() {
        // Open the report in the Web Document Viewer. path: '/report-viewer'
        this.router.navigate(['reports']);
    }
}
