# Jumbo Interactive AI Programming Task

Welcome to the Jumbo Interactive AI Programming Task! This repository contains the starting point for your task. Follow the instructions below to set up your environment, complete the task, and submit your project.

## Instructions

Your task is to create a single-page chat application using Ollama with the Llama 3 model. The application should allow a human user to have a conversation with the Llama 3 AI agent, maintaining the context between messages for a coherent back-and-forth exchange.

## Getting Started

### Prerequisites

-   **Docker**: This project requires Docker. If you don't have Docker installed, you can download and install it from the following links:
    -   [Docker for Windows](https://docs.docker.com/docker-for-windows/install/)
    -   [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)
    -   [Docker for Linux](https://docs.docker.com/engine/install/)

### Installation

1. **Fork the Repository**: Fork this repository to your own GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using the following command:
```
git clone <your-forked-repo-url>
```

3. **Navigate to the Project Directory**:
```
cd <your-repo-directory>
```

4. **Start the Project**: Use Docker Compose to start the project. This will set up the Next.js and Ollama containers.
```
docker compose up
```

Use Docker Compose to stop the project when you are ready
```
docker compose down
```

5. **Installing the Llama 3 Model**: Once the project is running, you need to install the Llama 3 model in the Ollama container. Follow these steps:

**Install the Llama 3 Model**:
```
docker exec -it jumbo-ai-task-ollama-1 ollama run llama3:latest
```

**Note**: You may need to check the container name by running `docker ps` and updating the name in the command if necessary.

**Common Issue**: The installation process may sometimes fail at around 98%. This is a known issue. If it happens, simply kill the process and run the installation command again. The installation will pick up where it left off.

### Accessing the Application

-   **Next.js Container**: The Next.js application is published to port 3000. You can access it at [http://localhost:3000](http://localhost:3000).
-   **Ollama Container**: The Ollama service is published to the default port 11434.

## Submitting Your Project

Once you have completed the task, share the link to your repository with us. Make sure your repository is public or grant us access if it's private.

## Additional Resources

-   **Next.js Documentation**: Learn more about Next.js features and API [here](https://nextjs.org/docs).
-   **Ollama Documentation**: Find more details on using Ollama [here](https://ollama.com/docs).
-   **Tailwind CSS Documentation**: Tailwind is available to style your project. learn more about Tailwind CSS [here](https://tailwindcss.com/docs).
-   **Ollama Package**: The Ollama package has already been installed. You can find it [here](https://www.npmjs.com/package/ollama).
-   **Yarn Documentation**: You can use Yarn to install other packages. Learn more about Yarn [here](https://classic.yarnpkg.com/en/docs/).

Happy coding!

**The Jumbo Interactive Team**
