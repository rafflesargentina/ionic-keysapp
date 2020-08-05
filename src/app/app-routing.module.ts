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
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
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
    path: 'form-registro-propietario',
    loadChildren: () => import('./form-registro-propietario/form-registro-propietario.module')
    .then( m => m.FormRegistroPropietarioPageModule)
  },
  {
    path: 'form-registro',
    loadChildren: () => import('./form-registro/form-registro.module').then( m => m.FormRegistroPageModule)
  },
  {
    path: 'form-registro-cliente',
    loadChildren: () => import('./form-registro-cliente/form-registro-cliente.module').then( m => m.FormRegistroClientePageModule)
  },
  {
    path: 'form-registro-propiedad',
    loadChildren: () => import('./form-registro-propiedad/form-registro-propiedad.module').then( m => m.FormRegistroPropiedadPageModule)
  },
  {
    path: 'form-registro-sucursal',
    loadChildren: () => import('./form-registro-sucursal/form-registro-sucursal.module').then( m => m.FormRegistroSucursalPageModule)
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
    path: 'select-cliente',
    loadChildren: () => import('./select-cliente/select-cliente.module').then( m => m.SelectClientePageModule)
  },
  {
    path: 'select-inmueble',
    loadChildren: () => import('./select-inmueble/select-inmueble.module').then( m => m.SelectInmueblePageModule)
  },
  {
    path: 'list-inmuebles',
    loadChildren: () => import('./list-inmuebles/list-inmuebles.module').then( m => m.ListInmueblesPageModule)
  },
  

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
