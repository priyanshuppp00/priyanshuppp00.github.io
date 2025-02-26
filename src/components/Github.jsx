import { useEffect, useState } from "react";
import { Github as GithubIcon } from "lucide-react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const username = "priyanshuppp00";
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data.slice(0, 5)))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div
      name="github"
      className="text-center text-gray-300 bg-[radial-gradient(#111111,#0a071a)] w-full h-full px-4 sm:px-8 md:px-16"
    >
      <div className="container max-w-screen-lg p-6 mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <GithubIcon className="w-8 h-8 text-white" />
          <h2 className="text-2xl font-bold">My GitHub</h2>
        </div>

        <p className="mb-4 text-lg">Check out my projects and contributions</p>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 mx-auto font-semibold text-gray-300 transition-transform duration-300 rounded-md cursor-pointer group bg-gradient-to-r from-slate-600 to-blue-800 hover:scale-105 hover:shadow-md hover:shadow-cyan-500 w-fit"
        >
          <GithubIcon className="w-5 h-5" /> Visit My GitHub
        </a>

        <div className="flex justify-center mt-8">
          <div className="w-full max-w-md p-4 transition-transform duration-300 bg-gray-900 rounded-lg shadow-lg hover:scale-105 hover:shadow-green-500 sm:p-6 sm:max-w-lg md:max-w-xl">
            <h3 className="mb-4 text-xl font-semibold">GitHub Contributions</h3>
            <div className="transition-opacity duration-300 hover:opacity-90">
              <GitHubCalendar
                username={username}
                colorScheme="dark"
                blockSize={10}
                blockMargin={4}
                fontSize={12}
                theme={{
                  dark: ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-6 py-4 mt-10">
          <div className="w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=nightowl&hide_border=true&border_radius=0&date_format=M%20j%5B%2C%20Y%5D`}
              alt="GitHub Streak Stats"
              className="w-full transition-transform duration-300 rounded-lg shadow-lg hover:scale-110 hover:shadow-gray-800"
              loading="lazy"
            />
          </div>

          <div className="w-full max-w-md mx-auto mt-10 sm:max-w-lg md:max-w-xl">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
              alt="GitHub Stats"
              className="w-full transition-transform duration-300 rounded-lg shadow-lg hover:scale-110 hover:shadow-purple-500"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xl font-semibold">Recent Repositories</h3>
          <div className="px-2 space-y-3 sm:px-4">
            {repos.length > 0 ? (
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg text-white transition hover:text-blue-300 hover:underline hover:scale-105"
                >
                  {repo.name}
                </a>
              ))
            ) : (
              <p className="text-gray-400">No repositories found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
