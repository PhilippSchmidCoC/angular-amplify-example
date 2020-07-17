import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
// import { AmplifyUIAngularModule } from "@aws-amplify/ui-angular";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { InseratComponent } from "./components/inserat/inserat.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    InseratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    // AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
