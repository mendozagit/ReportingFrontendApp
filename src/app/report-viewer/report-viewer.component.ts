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

      console.log("CustomizeMenuActions", event);

        // Hide the "ExportTo" action.
        // var exportToAction = event.args.GetById(ActionId.ExportTo);
        // if (exportToAction)
        //     exportToAction.visible = false;

        // Hide the "Print" and "PrintPage" actions.
        // var printAction = event.args.GetById(ActionId.Print);
        // if (printAction)
        //     printAction.visible = false;
        // var printPageAction = event.args.GetById(ActionId.PrintPage);
        // if (printPageAction)
        //     printPageAction.visible = false;
    }
    OnParametersInitialized(event: any) {
      console.log("OnParametersInitialized", event);

      // // Specify an invisible integer parameter's value on viewer initialization.
      // var invisibleIntParamValue = 42;
      // var intParam = event.args.ActualParametersInfo.filter(
      //     (x: any) => x.parameterDescriptor.name == "intParam")[0];
      // intParam.value = invisibleIntParamValue;

      // // Specify a visible Boolean parameter's value on viewer initialization.
      // var visibleBooleanParamValue = true;
      // var booleanParam = event.args.ActualParametersInfo.filter(
      //     (x: any) => x.parameterDescriptor.name == "booleanParam")[0];
      // booleanParam.value = visibleBooleanParamValue;

      // // Update a string parameter value when a user changes the Boolean parameter value.
      // var strParam = event.args.ActualParametersInfo.filter(
      //     (x: any) => x.parameterDescriptor.name == "strParam")[0];

      // booleanParam && booleanParam.events.on('propertyChanged', (args: any) => {
      //     if (args.propertyName === 'value') {
      //         strParam.value = args.newVal.toString();
      //     }
      // });

      // intParam & booleanParam & strParam && event.args.Submit();
  }
  OnParametersSubmitted($event: any) {
    console.log("OnParametersSubmitted", $event);
    //this.viewer.bindingSender.OpenReport(this.reportName + "?strParam=" + parameterValue);
  }

    print() {
        this.viewer.bindingSender.Print(2);
    }

    reportName = "Report4";
    // The backend application URL.
    host = 'https://localhost:7071/';

  //constructor(@Inject('BASE_URL') public hostUrl: string) { }
}
