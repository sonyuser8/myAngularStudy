# nested router link
* google keyword:angular routerlink nested
* https://www.tektutorialshub.com/angular/angular-child-routes-nested-routes/

# Commands
ng new test2019111601 --skip-install # create project structure but not install node_modules
npm install  # install modules in dependencies & devDependencies
npm install –production  - install dependencies

### routerLink 可以用在任何 HTMLELEMENT 上

### Generate New Component
ng generate component AAA
### Generate New Service
ng generate service SSS

# Some files need to study
* package.json
* tsconfig.json
* angular.json (or angular-cli.json) - <b>to include global .js/css <b>

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

2. Form Submit test ( Should I use angular form?)
3. Manage data (Build re-usable component)
4. Http Service including error handling
----------
6. child component如何改變 parent component的view
