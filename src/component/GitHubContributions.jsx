import GitHubCalendar from "react-github-calendar";
import './GitHubContributions.css'

const GitHubContributions = () => {
    return (
        <div className="GitHubContributions">
            <div className="GitHubContributions-container">
                <div className="github-h2">
                    <h2>My GitHub Contributions</h2>
                </div>
                <div className="github-repo">
                    
                    <GitHubCalendar username="TariqueMdHasan" />
                </div>
            </div>
        </div>
    );
};

export default GitHubContributions;
