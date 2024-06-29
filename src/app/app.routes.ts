import { Routes } from '@angular/router';
import { ReportViewerComponent } from './report-viewer/report-viewer.component';
import { ReportDesignerComponent } from './report-designer/report-designer.component';

export const routes: Routes = [
    { path: 'report-viewer', component: ReportViewerComponent },
    { path: 'report-designer', component: ReportDesignerComponent },

];
