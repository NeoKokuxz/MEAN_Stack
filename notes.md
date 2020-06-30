## Angular study notes

# Architecture
- Angular Application
  V
- Angular Module (@NgModule)
  V
- Angular Components (@Component)

# Component
- Template
  - HTML .component.html
  - Style .component.css
  - Code Typescript .component.ts

```angular
@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: ['./app.component.css']
})
```

- NgComponent
Every angular component (@Component) has to be associated with an Angular Module(@NgModule). 

