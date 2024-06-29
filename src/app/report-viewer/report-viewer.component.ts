import { ActionId } from 'devexpress-reporting/dx-webdocumentviewer'
import { Component, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { DxReportDesignerModule, DxReportViewerComponent, DxReportViewerModule } from 'devexpress-reporting-angular';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'report-viewer',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
   templateUrl: './report-viewer.component.html',
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
],
  imports: [
    CommonModule,
    RouterOutlet,
    DxReportViewerModule],
})
export class ReportViewerComponent {
    @ViewChild(DxReportViewerComponent, { static: false }) viewer!: DxReportViewerComponent;

    // The built-in controller in the back-end ASP.NET Core Reporting application.
    invokeAction: string = '/DXXRDV';

    CustomizeMenuActions(event: any) {
        // Hide the "Print" and "PrintPage" actions.
        var printAction = event.args.GetById(ActionId.Print);
        if (printAction)
            printAction.visible = false;
        var printPageAction = event.args.GetById(ActionId.PrintPage);
        if (printPageAction)
            printPageAction.visible = false;
    }

    print() {
        this.viewer.bindingSender.Print(1);
    }

    reportName = "Report1";
    // The backend application URL.
    host = 'https://localhost:7071/';

  //constructor(@Inject('BASE_URL') public hostUrl: string) { }
}
