import { useState } from "react";
import { MoreHorizontal, Pin, Smile, MessageCircle } from "lucide-react";
import "./CommunityFeed.css";

const PINNED_POST = {
  author: "Russell Brunson",
  avatar: "https://i.pravatar.cc/44?img=15",
  time: "3 hrs ago",
  content:
    "This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.",
  tasks: [
    "Minimum 20 minutes of sit-up",
    "Mention Intensity",
    "Upload Media (Optional)",
  ],
};

const COMMUNITY_POSTS = [
  {
    id: 1,
    author: "Sarah Mitchell",
    avatar: "https://i.pravatar.cc/40?img=5",
    time: "45 min ago",
    content:
      "Crushed Day 1! The sit-ups were tough but I pushed through. Already feeling the burn 💪",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=70",
    reactions: 24,
    comments: 5,
  },
  {
    id: 2,
    author: "Marcus Johnson",
    avatar: "https://i.pravatar.cc/40?img=8",
    time: "1 hr ago",
    content:
      "30 minutes of intense core work done! Who else is in this challenge? Let's gooo 🔥",
    reactions: 41,
    comments: 12,
  },
  {
    id: 3,
    author: "Priya Sharma",
    avatar: "https://i.pravatar.cc/40?img=9",
    time: "2 hrs ago",
    content:
      "Never thought I'd enjoy sit-ups but here we are. The community energy is amazing!",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=70",
    reactions: 18,
    comments: 3,
  },
];

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="feed-post-card">
      <div className="post-author-row">
        <div className="author-info">
          <div className="author-avatar">
            <img src={post.avatar} alt={post.author} width="40" height="40" />
          </div>
          <div className="author-meta">
            <span className="author-name">{post.author}</span>
            <span className="post-time">{post.time}</span>
          </div>
        </div>
        <button className="more-btn" aria-label="More options">
          <MoreHorizontal size={18} />
        </button>
      </div>
      <p className="post-caption">{post.content}</p>
      {post.image && (
        <div className="post-media-small">
          <img src={post.image} alt="Post media" className="media-thumbnail" />
        </div>
      )}
      <div className="post-reactions">
        <div className="reaction-left">
          <button
            className={`reaction-emojis ${liked ? "liked" : ""}`}
            onClick={() => setLiked((l) => !l)}
          >
            <span>🙏</span>
            <span>😍</span>
            <span className="reaction-count">
              {liked ? post.reactions + 1 : post.reactions}
            </span>
          </button>
          <button className="reaction-btn">
            <Smile size={20} />
          </button>
          <button className="reaction-btn">
            <MessageCircle size={20} />
          </button>
        </div>
        <button className="comments-link">{post.comments} Comments</button>
      </div>
    </div>
  );
}

export default function CommunityFeed() {
  return (
    <div className="community-feed">
      {/* Header */}
      <div className="community-header">
        <div className="community-avatars">
          <img
            src="https://i.pravatar.cc/28?img=3"
            alt=""
            className="stacked-avatar"
          />
          <img
            src="https://i.pravatar.cc/28?img=7"
            alt=""
            className="stacked-avatar"
          />
          <img
            src="https://i.pravatar.cc/28?img=12"
            alt=""
            className="stacked-avatar"
          />
        </div>
        <div className="community-title-group">
          <h2 className="community-title">
            See what others{" "}
            <span className="avatars-inline">
              <img src="https://i.pravatar.cc/20?img=3" alt="" />
              <img src="https://i.pravatar.cc/20?img=7" alt="" />
              <img src="https://i.pravatar.cc/20?img=12" alt="" />
            </span>{" "}
            shared
          </h2>
          <p className="community-subtitle">85+ participants already completed</p>
        </div>
      </div>

      {/* Pinned Post */}
      <div className="feed-post-card pinned-card">
        <div className="pinned-badge">
          <Pin size={14} />
          <span>This is a pinned post</span>
        </div>
        <div className="post-author-row">
          <div className="author-info">
            <div className="author-avatar">
              <img
                src={PINNED_POST.avatar}
                alt={PINNED_POST.author}
                width="40"
                height="40"
              />
            </div>
            <div className="author-meta">
              <span className="author-name">{PINNED_POST.author}</span>
              <span className="post-time">{PINNED_POST.time}</span>
            </div>
          </div>
          <button className="more-btn">
            <MoreHorizontal size={18} />
          </button>
        </div>
        <p className="post-caption">{PINNED_POST.content}</p>
        <ol className="task-list">
          {PINNED_POST.tasks.map((task, i) => (
            <li key={i} className="task-item">
              <span className="task-num">{i + 1}</span>
              {task}
            </li>
          ))}
        </ol>
      </div>

      {/* Community Posts */}
      <div className="feed-posts-list">
        {COMMUNITY_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}