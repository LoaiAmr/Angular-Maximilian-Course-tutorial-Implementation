import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-gaurd-service';
import { CanDeactivateGuard } from './servers/edit-server/can-decativate-guard-service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver-service';


const appRouter: Routes = [
    {path: '', component: HomeComponent}, /**  localhost:4200/  */
    {path: 'users', component: UsersComponent, children:[  /**  localhost:4200/users  */
      {path: ':id/:name', component: UserComponent}, /**  localhost:4200/users/id  */
    ]},

    {path: 'servers',
    //  canActivate:[AuthGuard], 
    canActivateChild: [AuthGuard], /** it used to make auth for a children of this path */
     component: ServersComponent, children:[ /**  localhost:4200/servers  */
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}}, /**  localhost:4200/servers/id  */
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]} /**  localhost:4200/servers/id/edit?  */
    ]}, 

    // {path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found!'}},
    {path: '**', redirectTo: '/not-found'}, /** This is use for any other wrong url not handled given by mistak 
    from user and it must be the (last one always in the urls)  */
]



@NgModule({
    imports:[
      /** it be useful in deployment to seperate our URL into 2 section
          one is handled by the (real server => localhost:4200) and second by (angular) */
        // RouterModule.forRoot(appRouter, {useHash: true}) 
        RouterModule.forRoot(appRouter)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}