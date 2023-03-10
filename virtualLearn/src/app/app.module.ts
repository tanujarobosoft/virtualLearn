import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatIconModule} from '@angular/material/icon';
import { MyCourseHomeComponent } from './my-course-home/my-course-home.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { CourseChaptersComponent } from './course-chapters/course-chapters.component';
import { CourseCompletedComponent } from './course-completed/course-completed.component';
import { ModuleTestComponent } from './module-test/module-test.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { ProgressScreenComponent } from './progress-screen/progress-screen.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { FinalTestCongratulationsComponent } from './final-test-congratulations/final-test-congratulations.component';
import { CertificateComponent } from './certificate/certificate.component';
// import {MatDialogModule} from '@angular/material/dialog';
import { CloseTestComponent } from './close-test/close-test.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthserviceInterceptor } from './token.interceptor';
import { ConfirmSubmitComponent } from './confirm-submit/confirm-submit.component';
import { TimePipe } from './time.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { ContinueWatchingComponent } from './continue-watching/continue-watching.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCoursesComponent,
    HeaderComponent,
    MyCourseHomeComponent,
    CourseOverviewComponent,
    CourseChaptersComponent,
    CourseCompletedComponent,
    ModuleTestComponent,
    CongratulationsComponent,
    ProgressScreenComponent,
    QuizResultComponent,
    FinalTestCongratulationsComponent,
    CertificateComponent,
    CloseTestComponent,
    LoginComponent,
    ConfirmSubmitComponent,
    TimePipe,
    ContinueWatchingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [

    {

      provide: HTTP_INTERCEPTORS,

      useClass: AuthserviceInterceptor,

      multi: true,

    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
