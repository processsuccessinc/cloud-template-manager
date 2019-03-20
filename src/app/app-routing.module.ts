import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CleanupComponent } from './cleanup/cleanup.component';
import { ExportComponent } from './export/export.component';
import { ImportFromFileComponent } from './import/import-from-file.component';
import { ImportFromProjectComponent } from './import/import-from-project.component';
import { MasterLayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '', component: MasterLayoutComponent, children: [
      { path: '', component: ImportFromProjectComponent },
      { path: 'export', component: ExportComponent },
      { path: 'cleanup', component: CleanupComponent },
      { path: 'import-from-project', component: ImportFromProjectComponent },
      { path: 'import-from-file', component: ImportFromFileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
