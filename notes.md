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
  
  
# Layers
- Web Layer
- Business Layer
- Data Layer


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
The service definition is the contract between the service provider and the service consumer.
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
 - Transport defines how a service is called, expose through url or queue.
 - MQ is the communication over queue
 
# REST
REpresentational State Transfer
- HTTP (Hyper Text Transfer Protocol)
 - Get - 
 - Post - create
 
## Rest Controller
```
import org.springframework.web.bind.annotation.RestController;
@RestController
```

## Mapping 
```
import org.springframework.web.bind.annotation.RequestMapping;
@RequestMapping(method = RequestMethod.GET, path = "/hello-world") - can be replace by code below

import org.springframework.web.bind.annotation.GetMapping;
@GetMapping(path = "/hello-world") //Mapping GET request to hello-world


```


