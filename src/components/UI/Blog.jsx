import React from "react";
import "../../styles/blog.css";
import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudy from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video",
    desc: "To know about work. Watch some video f....",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: " Article",
    desc: "Do you want to improve the way your brand interacts with customer? Lets talk....",
    linkUrl: "#",
  },
  {
    imgUrl: caseStudy,
    title: "Case Study",
    desc: "Boost your conversation rate with us....",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog-top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Let's have a look from{" "}
            <span className="highlight">recent blog</span>{" "}
          </h2>
        </div>

        <div className="blog-wrapper">
        {blogData.map((item, index) => (
            <div className="blog-item" key={index}>
            <h3>{item.title}</h3>
            <div className="blog-img">
              <img src={item.imgUrl} alt=""/>
            </div>
            <p className="description blog-desc">{item.desc}</p>
            <div>
              <a href={item.linkUrl} className="learn-more">
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
