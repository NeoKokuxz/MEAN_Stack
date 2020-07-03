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
  - Every angular component (@Component) has to be associated with an Angular Module(@NgModule). 

# Web Service
Software system designed to support interoperable machine-to-machine interaction over a network. 

- Request - input
- Response - output
- Format
  - XML (Extensible Markup Language)
  ```
  <getDetailRequest>
    <id>number1<id>
  </getDetailRequest>
  ```
  - JSON (Javascript Object Noation)
  ```
  {
   "id": 1,
   "name": Neo
  }
  ```
# Service Definition
- Request/Reponse Format
  - XML or JSON
- Request Structure
- Response Structure
- End Point
 - Where the consumer can call this service and where is the service exposed. 

# Key Terminology
- Service Provider or Server
- Service Consumer or Client
- Service Definition
- Transport
 - HTTP and MQ

# Layers
  - Web Layer
  - Business Layer
  - Data Layer
