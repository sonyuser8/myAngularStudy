# Commands
ng new test2019111601 --skip-install # create project structure but not install node_modules
npm install  # install modules in dependencies & devDependencies

npm install –production  - install dependencies

# Generate New Component
ng generate component


# Some files need to study
package.json
tsconfig.json
angular.json (or angular-cli.json)

# Routing
1. Configure the routes (app.module.ts)
    import { RouterModule } from '@angular/router';
    RouterModule.forRoot([{path: '',component: HomeComponent}]) #imports
2. Add a router outlet (app.component.html)
    <router-outlet></router-outlet>
3. Add links (app.component.html or anything else) 
    <a class="nav-link" routerLink="/followers">Followers</a>

# Practicce
1. By options to show different form
2. Http Service including error handling