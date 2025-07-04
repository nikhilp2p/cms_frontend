import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/sidebar.component').then((m) => m.SidebarComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'charger-model',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/charger-model/charger-model.component').then(
                (m) => m.ChargerModelComponent
              ),
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import(
                './pages/charger-model/edit-charger-model-dialog/edit-charger-model-dialog.component'
              ).then((m) => m.EditChargerModelDialogComponent),
          },
        ],
      },
      {
        path: 'charger-variant',
        loadComponent: () =>
          import('./pages/charger-variant/charger-variant.component').then(
            (m) => m.ChargerVariantComponent
          ),
      },
      {
        path: 'manage-chargers',
        loadComponent: () =>
          import('./pages/manage-charger/manage-charger.component').then(
            (m) => m.ManageChargersComponent
          ),
      },
      {
        path: 'chargers-connector',
        loadComponent: () =>
          import('./pages/charger-connector/charger-connector.component').then(
            (m) => m.ChargerConnectorComponent
          ),
      },
      {
        path: 'manage-rfid',
        loadComponent: () =>
          import('./pages/rfid/manage-rfid/manage-rfid.component').then(
            (m) => m.ManageRfidComponent
          ),
      },
      {
        path: 'cpo-rfid-mapping',
        loadComponent: () =>
          import('./pages/rfid/manage-cpo-rfid/manage-cpo-rfid.component').then(
            (m) => m.ManageCpoRfidComponent
          ),
      },
      {
        path: 'manage-cpo',
        loadComponent: () =>
          import('./pages/manage-cpo/manage-cpo.component').then(
            (m) => m.ManageCpoComponent
          ),
      },
      {
        path: 'charger-dispatch',
        loadComponent: () =>
          import('./pages/charger-dispatch/dispatchmanagement.component').then(
            (m) => m.DispatchmanagementComponent
          ),
      },
      {
        path: 'client-management',
        loadComponent: () =>
          import('./pages/client-management/manageclient.component').then(
            (m) => m.ManageclientComponent
          ),
      },
      {
        path: 'charging-station',
        loadComponent: () =>
          import('./pages/manage-station/managestation.component').then(
            (m) => m.ManagestationComponent
          ),
      },
      {
        path: 'ocpp-diagnostic',
        loadComponent: () =>
          import('./pages/OCPP/ocpp-operation.component/ocpp-operation.component').then(
            (m) => m.OcppOperationComponent
          ),
      },
      {
        path: 'ocpp-diagnostic/charger/:id',
        loadComponent: () =>
          import('./pages/OCPP/ocpp-details/ocpp-details.component').then(
            (m) => m.ChargerDetailComponent
          ),
      },
      {
        path: 'manage-user',
        loadComponent: () =>
          import('./pages/user-management/user-management/user-management.component').then(
            (m) => m.ManageUserComponent
          ),
      },
      {
        path: 'connectors',
        redirectTo: '/home/chargers-connector',
        pathMatch: 'full',
      },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
