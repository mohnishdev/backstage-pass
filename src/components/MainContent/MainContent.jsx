import SubmissionCard from "../SubmissionCard/SubmissionCard";
import CommunityFeed from "../CommunityFeed/CommunityFeed";
import "./MainContent.css";

export default function MainContent({ selectedDay }) {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <SubmissionCard day={selectedDay} />
        <CommunityFeed />
      </div>
    </main>
  );
}
