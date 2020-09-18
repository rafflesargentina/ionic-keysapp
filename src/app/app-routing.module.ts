import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Services/authentication/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'recortar-imagen',
    loadChildren: () => import('./recortar-imagen/recortar-imagen.module').then( m => m.RecortarImagenPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'cambiar-contrasena',
    loadChildren: () => import('./cambiar-contrasena/cambiar-contrasena.module').then( m => m.CambiarContrasenaPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'form-registro',
    loadChildren: () => import('./form-registro/form-registro.module').then( m => m.FormRegistroPageModule),
    
  },
  {
    path: 'form-registro-propiedad',
    loadChildren: () => import('./form-registro-propiedad/form-registro-propiedad.module').then( m => m.FormRegistroPropiedadPageModule)
  },
  {
    path: 'form-registro-administrador',
    loadChildren: () => import('./form-registro-administrador/form-registro-administrador.module').then( m => m.FormRegistroAdministradorPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'form-evento',
    loadChildren: () => import('./form-evento/form-evento.module').then( m => m.FormEventoPageModule)
  },
  {
    path: 'form-invitacion',
    loadChildren: () => import('./form-invitacion/form-invitacion.module').then( m => m.FormInvitacionPageModule)
  },
  {
    path: 'detail-evento',
    loadChildren: () => import('./detail-evento/detail-evento.module').then( m => m.DetailEventoPageModule)
  },
  {
    path: 'list/:tipo',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'form-llave',
    loadChildren: () => import('./form-llave/form-llave.module').then( m => m.FormLlavePageModule)
  },
  {
    path: 'form-sucursal',
    loadChildren: () => import('./form-sucursal/form-sucursal.module').then( m => m.FormSucursalPageModule)
  },
  {
    path: 'select/:tipo',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  }, 
  
  {
    path: 'detail-contacto/:id',
    loadChildren: () => import('./detail-contacto/detail-contacto.module').then( m => m.DetailContactoPageModule)
  },
  {
    path: 'form-operacion',
    loadChildren: () => import('./form-operacion/form-operacion.module').then( m => m.FormOperacionPageModule)
  },
  {
    path: 'list-invitaciones',
    loadChildren: () => import('./list-invitaciones/list-invitaciones.module').then( m => m.ListInvitacionesPageModule)
  },
  {
    path: 'detail-inmueble/:id',
    loadChildren: () => import('./detail-inmueble/detail-inmueble.module').then( m => m.DetailInmueblePageModule)
  },



  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
