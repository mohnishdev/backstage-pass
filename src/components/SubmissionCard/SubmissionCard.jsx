import { useState } from "react";
import { MoreHorizontal, Smile, MessageCircle, Play } from "lucide-react";
import Confetti from "../Confetti/Confetti";
import "./SubmissionCard.css";

export default function SubmissionCard({ day }) {
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="submission-card">
      {/* Confetti Header */}
      <div className="submission-header">
        <Confetti />
        <span className="submission-label">Your Submission</span>
      </div>

      {/* Post Content */}
      <div className="submission-body">
        {/* Author Row */}
        <div className="post-author-row">
          <div className="author-info">
            <div className="author-avatar">
              <img
                src="https://i.pravatar.cc/40?img=11"
                alt="Ashraf Idrishi"
                width="40"
                height="40"
              />
            </div>
            <div className="author-meta">
              <span className="author-name">Ashraf Idrishi</span>
              <span className="post-time">1s</span>
            </div>
          </div>
          <button className="more-btn" aria-label="More options">
            <MoreHorizontal size={18} />
          </button>
        </div>

        {/* Caption */}
        <p className="post-caption">
          Today's challenge workout completed—feeling stronger already
        </p>

        {/* Media */}
        <div
          className={`post-media ${playing ? "playing" : ""}`}
          onClick={() => setPlaying((p) => !p)}
        >
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
            alt="Workout"
            className="media-thumbnail"
          />
          {!playing && (
            <button className="play-btn" aria-label="Play video">
              <Play size={28} fill="white" />
            </button>
          )}
        </div>

        {/* Reactions Row */}
        <div className="post-reactions">
          <div className="reaction-left">
            <button
              className={`reaction-emojis ${liked ? "liked" : ""}`}
              onClick={() => setLiked((l) => !l)}
            >
              <span>🙏</span>
              <span>😍</span>
              <span className="reaction-count">{liked ? 19 : 18}</span>
            </button>
            <button className="reaction-btn" aria-label="React">
              <Smile size={20} />
            </button>
            <button className="reaction-btn" aria-label="Comment">
              <MessageCircle size={20} />
            </button>
          </div>
          <button className="comments-link">10 Comments</button>
        </div>
      </div>
    </div>
  );
}
