# Commands
ng new test2019111601 --skip-install # create project structure but not install node_modules
npm install  # install modules in dependencies & devDependencies
npm install –production  - install dependencies

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
2. Http Service including error handling
3. Form Submit test ( Should I use angular form?)
4. 按了某個元素之後, 如何引響其他元素? 而非只侷限在自己
5. child component如何改變 parent component的view
