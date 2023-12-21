# Microservices architecture and cloud deployment

# Part 1: Cloud Deployment

- Docker and Containerization:
    - a. Create a Dockerfile the simple web application that uses Node.js.
    - b. Build and run the Docker container.
    ```bash
    docker build -t my-node-app .
    ```
    ```bash
    docker run -p 8080:8080 --name my-container -e APPLICATION_INSTANCE=my-instance my-node-app
    ```
    - c. Push your container image to a public repository such as Docker Hub
    ```bash
    docker tag my-node-app:latest brazok/my-node-app:latest
    ```
    ```bash
    docker push brazok/my-node-app:latest
    ```
- Kubernetes:
    - a. Deploy the Dockerized web application from the previous question to a Kubernetes cluster. (You can use minikube, a cluster deployed on the cloud …)
    ```bash
    kubectl apply -f deployment.yaml
    ```
    - b. Make your application accessible from outside the cluster.
    ```bash
    kubectl apply -f service.yaml
    ```
    ```bash
    minikube service my-app
    ```
    - c. Scale the application horizontally for high availability.
    ```bash
    kubectl scale deployment/my-app --replicas=3
    ```
    - d. Set requests and limits for your deployment
    ```bash
    kubectl apply -f resource.yaml
    ```
    - c. Set Liveness and Readiness probes for your deployment
    ```bash
    kubectl apply -f probe.yaml
    ```
    
Commit an push your Dockerfile and the yaml resource files used to deploy your
application to Kubernetes to your fork of the project.

# Part 2: Microservices Architecture

## Q1: Define what is a Microservices architecture and how does it differ from a Monolithic application.
It's an architecture where the application is split into small independent services that communicate with each other through APIs.
It differs from a monolithic application because it's easier to maintain and to scale.
The services can be developed independently and can be written in different languages and use different technologies which is not possible in a monolithic application.

## Q2: Compare Microservices and Monolithic architectures by listing their respective pros and cons.
|  | Pros | Cons |
|-|-|-|
| Microservices | Flexibility<br>Various technologies<br>Resilience<br>Continuous Deployment and Delivery<br>Scalability<br>Parallel Development | Complexity<br>Monitoring and debugging challenge<br>Management and Infrastructure Costs<br>Risk of excessive fragmentation<br>Deployment |
| Monolithic | Simplicity<br>Performance | Scalability<br>Flexibility<br>Resilience |


## Q3: In a Micoservices architecture, explain how should the application be split and why.
The application should be split into small independent services that communicate with each other through APIs.
Each service should be responsible for a specific task and should be developed independently.
The services should be loosely coupled and should be able to be deployed independently.

## Q4: Briefly explain the CAP theorem and its relevance to distributed systems and Microservices.
The CAP theorem states that it's impossible for a distributed system to simultaneously provide more than two out of three guarantees: Consistency, Availability and Partition tolerance.
In a microservices architecture, the partition tolerance is the most important guarantee because the services are distributed and they need to be able to communicate with each other even if some of them are down.
The consistency and the availability are less important because the services can be developed independently and they don't need to be consistent all the time.

## Q5: What consequences on the architecture ?
The services should be able to communicate with each other even if some of them are down.
The services should be loosely coupled and should be able to be deployed independently.

## Q6: Provide an example of how microservices can enhance scalability in a cloud environment.
The services can be deployed on different servers and can be scaled independently.
For example, if a service is used more than the others, it can be scaled without scaling the others.

## Q7: What is statelessness and why is it important in microservices architecture ?
Statelessness means that the server doesn't store any state about the client session.
It's important in microservices architecture because the services are independent and they don't need to know the state of the other services.

## Q8: What purposes does an API Gateway serve ?
The API Gateway is the single entry point for all clients.
It's responsible for authentication, routing, load balancing, caching, monitoring, logging, etc.
