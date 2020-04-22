import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ConverGenderPipe } from "./conver-gender.pipe";

import { MotelsComponent } from "./motels/motels.component";
import { MotelService } from "./motel.service";
import { MotelDetailComponent } from "./motel-detail/motel-detail.component";
import { MotelFormComponent } from "./motel-form/motel-form.component";

import { StudentComponent } from "./students/students.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentFormComponent } from "./student-form/student-form.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: MotelsComponent },
      { path: "detail/:motelid", component: MotelDetailComponent },
      { path: "add-motel", component: MotelFormComponent },
      { path: "edit-motel/:id", component: MotelFormComponent },
      { path: "", component: StudentComponent },
      { path: "detail/:motelid/detail1/:studentsid", component: StudentDetailComponent },
      { path: "detail/:motelid/add-student", component: StudentFormComponent },
      { path: "detail/:motelid/edit-student/:sid", component: StudentFormComponent }
      // StudentsComponent, StudentDetailComponent,StudentFormComponent
    ])
  ],
  declarations: [
    AppComponent,
    ConverGenderPipe,
    MotelsComponent,
    MotelDetailComponent,
    MotelFormComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentFormComponent
  ],
  bootstrap: [AppComponent],
  providers: [MotelService]
})
export class AppModule {}
