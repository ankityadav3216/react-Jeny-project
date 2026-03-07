import React from "react";
import "./ProjectUpdates.css";
import { PlayCircleFilled, FolderOpenOutlined } from "@ant-design/icons";

const ProjectUpdates = () => {
  const youtubeLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const fallbackVideoId = "dQw4w9WgXcQ";

  const getVideoId = (url) => {
    const regExp =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(youtubeLink) || fallbackVideoId;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section className="project-updates-container" aria-labelledby="project-updates-title">
      <header className="updates-header">
        <div className="updates-icon">
          <FolderOpenOutlined />
        </div>

        <h2 id="project-updates-title">Project Updates</h2>
      </header>

      <article className="updates-video-wrapper">
        <a
          className="updates-video-link"
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open project update video"
        >
          <div className="updates-video-card">
            <img src={thumbnail} alt="Project update video thumbnail" />
            <div className="play-icon">
              <PlayCircleFilled />
            </div>
          </div>
        </a>

        <div className="timeline-dot"></div>
      </article>

      <div className="updates-text">
        <h3>
          Drone Tour At Revanta Fortune 3 - 2 & 3
          BHK Under Flats
        </h3>
        <p>May 20, 2025</p>
      </div>
    </section>
  );
};

export default ProjectUpdates;
