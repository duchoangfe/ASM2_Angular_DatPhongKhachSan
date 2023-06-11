import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RoomPageComponent } from './pages/room-page/room-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminRoomComponent } from './pages/admin/admin-room/admin-room.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';
import { RoomAddComponent } from './pages/admin/room-add/room-add.component';
import { RoomEditComponent } from './pages/admin/room-edit/room-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './pages/admin/category/category-add/category-add.component';
import { CategoryEditComponent } from './pages/admin/category/category-edit/category-edit.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';

import { ListUserComponent } from './pages/admin/user/list-user/list-user.component';
import { UserRoomComponent } from './components/user-room/user-room.component';
import { BookingRoomComponent } from './components/booking-room/booking-room.component';
import { HistoryBookingComponent } from './components/history-booking/history-booking.component';

@NgModule({
    declarations: [
        AppComponent,
        RoomListComponent,
        HomePageComponent,
        BaseLayoutComponent,
        AdminLayoutComponent,
        AboutPageComponent,
        RoomPageComponent,
        PageNotFoundComponent,
        DashboardComponent,
        AdminRoomComponent,
        RoomDetailComponent,
        RoomAddComponent,
        RoomEditComponent,
        SignupComponent,
        SigninComponent,
        CategoryListComponent,
        CategoryAddComponent,
        CategoryEditComponent,
        CategoryPageComponent,
        CategoryDetailComponent,
        ListUserComponent,
        UserRoomComponent,
        BookingRoomComponent,
        HistoryBookingComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
