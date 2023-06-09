import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AdminRoomComponent } from './pages/admin/admin-room/admin-room.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RoomPageComponent } from './pages/room-page/room-page.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';
import { RoomAddComponent } from './pages/admin/room-add/room-add.component';
import { RoomEditComponent } from './pages/admin/room-edit/room-edit.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './pages/admin/category/category-add/category-add.component';
import { CategoryEditComponent } from './pages/admin/category/category-edit/category-edit.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { AddUserComponent } from './pages/admin/user/add-user/add-user.component';
import { ListUserComponent } from './pages/admin/user/list-user/list-user.component';
import { BookingRoomComponent } from './components/booking-room/booking-room.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            { path: '', component: HomePageComponent },
            { path: 'about', component: AboutPageComponent },
            { path: 'categories', component: CategoryPageComponent },
            { path: 'categories/:id', component: CategoryDetailComponent },
            { path: 'room', component: RoomPageComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'signin', component: SigninComponent },
            { path: 'room/:id', component: RoomDetailComponent },
            { path: 'booking/:id', component: BookingRoomComponent },
        ],
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'room', component: RoomListComponent },
            { path: 'room/add', component: RoomAddComponent },
            { path: 'room/:id/edit', component: RoomEditComponent },
            { path: 'categories', component: CategoryListComponent },
            { path: 'categories/add', component: CategoryAddComponent },
            { path: 'categories/:id/edit', component: CategoryEditComponent },
            { path: 'user', component: ListUserComponent },
            { path: 'user/add', component: AddUserComponent },
        ],
    },

    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
})
export class AppRoutingModule {}
