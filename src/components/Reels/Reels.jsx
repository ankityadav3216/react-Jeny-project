import React, { useRef, useEffect, useState } from "react";
import { Card } from "antd";
import { PlayCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";
import "./Reels.css";

const reelsData = [
  { id: 1, videoUrl: "https://youtube.com/shorts/8cumXFw9TlY" },
  { id: 2, videoUrl: "https://www.youtube.com/watch?v=BWch04ZigCI" },
  { id: 3, videoUrl: "https://youtube.com/shorts/SsEcO9fnTNk" },
  { id: 4, videoUrl: "https://youtube.com/shorts/ZisVgwJ8TVw" },
  { id: 5, videoUrl: "https://youtube.com/shorts/hdtF9da8dO8" },
  { id: 6, videoUrl: "https://youtube.com/shorts/lhjKS8SJMvE" },
];

const toEmbedUrl = (url) => {
  if (url.includes("/shorts/")) {
    const id = url.split("/shorts/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
};

const Reels = () => {
  const containerRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  // Auto scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // speed
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        if (!isHover) {
          scrollAmount += scrollStep;
          if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            scrollAmount = 0; // loop back
          }
          container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }, 20);
    };

    startScroll();
    return () => clearInterval(interval);
  }, [isHover]);

  const openReel = (url) => {
    const embedUrl = toEmbedUrl(url);
    const win = window.open("", "_blank");

    win.document.write(`
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            body {
              margin: 0;
              background: black;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
            }
            iframe {
              width: 360px;
              height: 640px;
              border: none;
              border-radius: 16px;
            }
            @media (max-width: 600px) {
              iframe {
                width: 100%;
                height: 100%;
                border-radius: 0;
              }
            }
          </style>
        </head>
        <body>
          <iframe
            src="${embedUrl}?autoplay=1&controls=1&rel=0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </body>
      </html>
    `);
  };

  return (
    <div className="reels-section">
      <div className="reels-heading-container">
        <VideoCameraOutlined className="reels-logo" />
        <h2 className="reels-heading">Watch Reels</h2>
      </div>

      <div
        className="reels-scroll"
        ref={containerRef}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {reelsData.map((reel) => (
          <Card
            key={reel.id}
            className="reel-card"
            bodyStyle={{ padding: 0 }}
            onClick={() => openReel(reel.videoUrl)}
          >
            <div className="reel-thumbnail">
              <iframe
                src={`${toEmbedUrl(reel.videoUrl)}?mute=1&controls=0`}
                title="reel"
                allow="autoplay; encrypted-media"
              />
              <div className="play-overlay">
                <PlayCircleOutlined className="play-icon" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reels;
