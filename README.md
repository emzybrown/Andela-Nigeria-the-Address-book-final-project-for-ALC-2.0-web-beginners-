# Andela-Nigeria-the-Address-book-final-project-for-ALC-2.0-web-beginners-
Andela Nigeria ALC 2.0 which began in December 2017, 
I was opportune to partake in the course taught via Udacity and supported by Google. 
This is a final project termed the address book. I included in this repository my index.html, style.css, design.js. 
My javascript was mainly coded in pure javascript and I used jquerry for only one event which is to toggle(). 
I want to thank Andela for the opportunity to learn basic coding, udacity for using their platform to train me, and w3school and Mozilla development network websites for their great reference materials which aided in my completing this course.

Build the App to an on-prem docker and Azure container instance via Azure container registry.

1. Code created on a Linux machine, mkdir chuk-php-app, touch index.php, style.css, design.js
2. The Dockerfile was created on the same path as the code
3. Docker image was created and run with the below commands exposing the app to port 8080 a. docker build -t my-php-app . b. docker run -p 8080:80 my-php-app
4. Access the code script from the browser via http://" server Ip address":8080

Push the Docker Images to the Azure container registry and run the image on the Azure container instance
1. Create an Azure Container Registry (ACR)
2. Login to ACR: Use the Azure CLI to log in to your ACR: az acr login --name
3. Tag and Push the Image: Tag your Docker image with the ACR name and push it to the registry: a. docker tag my-php-app .azurecr.io/my-php-app:v1 b. docker push .azurecr.io/my-php-app:v1
4. Create an Azure Container Instance: a. In the Azure Portal, click "Create a resource" and search for "Container Instances". b. Provide a resource group, container name, and region. c. Under the "Container" tab, specify the image from your ACR (e.g., YourRegistryName.azurecr.io/my-php-app:v1). d. Set the port to 80. e. Configure other settings such as CPU, memory, and environment variables if necessary. f. Review and create the container instance. g. Access the Container: After deployment, you’ll get a public IP address where you can access your script.


OR
Create Azure app service using container image on the Azure container repository
