import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { OrderComponent } from "./order/order.component";
import { OrderConfirmComponent } from "./order-confirm/order-confirm.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations: [
        HomeComponent, FooterComponent, HeaderComponent, 
        DetailProductComponent,
        OrderComponent,
        OrderConfirmComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [
        //HomeComponent,
        //DetailProductComponent,
        //OrderComponent,
        //OrderConfirmComponent,
        //LoginComponent,
        RegisterComponent
    ]
})

export class AppModule {}