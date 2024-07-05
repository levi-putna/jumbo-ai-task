import Image from "next/image";
import JumboLogo from "/public/logo.png";
import WelcomeImage from "/public/welcome.png";
import OllamaScreenshot from "/public/screenshot.png";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <header className="text-center">
                <div className="flex justify-center">
                    <Image src={JumboLogo} alt="Jumbo Logo" width={200} height={200} />
                </div>
                <h1 className="text-4xl font-bold my-4">
                    Welcome to the Jumbo Interactive AI Coding Task!
                </h1>
            </header>

            <main className="mt-10 p-5 bg-white rounded-lg shadow-lg max-w-3xl mb-16">
                <div className="flex justify-center my-4">
                    <Image
                        src={WelcomeImage}
                        alt="Welcome"
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

                <p className="text-xl my-8 w-full text-center">
                🚀 Congratulations on getting your environment up and running!
                </p>

                <section className="mt-6 text-left">
                    <h2 className="text-2xl font-semibold">Task Instructions</h2>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>
                            Set up a simple chat interface where a user can input messages and see
                            responses from the AI assistant.
                        </li>
                        <li>
                            Ensure that the conversation context is maintained between messages.
                            This means that the AI should be able to reference previous parts of the
                            conversation in its responses.
                        </li>
                        <li>
                            Integrate the Ollama library to interact with the Llama 3 model for
                            generating responses.
                        </li>
                        <li>
                            Use Tailwind CSS to style your application for a clean and modern user
                            interface.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12">Available Resources</h2>

                    <h3 className="text-xl font-semibold mt-8">Next.js and Tailwind CSS</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>
                            The project is using Next.js with plain JavaScript, not TypeScript. Find
                            out more about Next.js
                            <a href="https://nextjs.org" className="text-blue-500 underline">
                                {" "}
                                here
                            </a>
                            .
                        </li>
                        <li>
                            Tailwind CSS is available to speed up the styling. Find out more about
                            Tailwind
                            <a href="https://tailwindcss.com/" className="text-blue-500 underline">
                                {" "}
                                here
                            </a>
                            .
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-8">Ollama</h3>
                    <div className="flex justify-center mb-4">
                        <Image
                            src={OllamaScreenshot}
                            alt="Welcome"
                            width={800}
                            height={400}
                            className="rounded-lg w-full"
                        />
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>
                            Ollama is running in a Docker container on the default port 11434. Find
                            out more about Ollama
                            <a href="https://ollama.com/" className="text-blue-500 underline">
                                {" "}
                                here
                            </a>
                            .
                        </li>
                        <li>
                            Before you get started, you will need to get Llama 3 installed in the
                            container. Run the following command:
                            <pre className="bg-gray-100 p-2 rounded mt-2">
                                <code>
                                    docker exec -it jumbo-ai-task-ollama-1 ollama pull llama3:latest
                                </code>
                            </pre>
                        </li>
                        <li>
                            You may need to check the container name by running{" "}
                            <code className="bg-gray-100 p-2 rounded mt-2">docker ps</code> and
                            updating the name if needed.
                        </li>
                        <li>
                            <b>Note:</b> Ollama sometimes fails at around 98%. This is a common
                            issue. Just kill the process and run it again; it will pick up where it
                            left off.
                        </li>
                        <li>
                            The Ollama library is already included. You can find it
                            <a
                                href="https://www.npmjs.com/package/ollama"
                                className="text-blue-500 underline"
                            >
                                {" "}
                                here
                            </a>
                            .
                        </li>
                    </ul>

                    <p className="mt-6 text-xl">Have fun and good luck with your coding task! 🚀</p>
                </section>
            </main>
        </div>
    );
}
