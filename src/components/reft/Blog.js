import React from "react";
import useHover from "../../hooks/useHover";
import useLinkNewTab from "../../hooks/useLinkNewTab";

const Blog = () => {
  const { nodeRef: wrappLinkRef } = useLinkNewTab();
  const { nodeRef, hovered } = useHover();
  return (
    <div>
      <div ref={wrappLinkRef}>
        <p className="mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          natus corrupti laboriosam quasi non quos beatae unde, officiis quo
          voluptatem placeat ullam obcaecati consequuntur autem labore
          exercitationem. Blanditiis, quas iusto.
          <a
            ref={nodeRef}
            href="http://google.com"
            className={`${hovered ? "text-red-400" : ""}  underline`}
          >
            google
          </a>
        </p>

        <p className="mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          natus corrupti laboriosam quasi non quos beatae unde, officiis quo
          voluptatem placeat ullam obcaecati consequuntur autem labore
          exercitationem. Blanditiis, quas iusto.
          <a href="http://google.com" className="underline">
            google
          </a>
        </p>

        <p className="mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          natus corrupti laboriosam quasi non quos beatae unde, officiis quo
          voluptatem placeat ullam obcaecati consequuntur autem labore
          exercitationem. Blanditiis, quas iusto.
          <a href="http://google.com" className="underline">
            google
          </a>
        </p>
      </div>
    </div>
  );
};

export default Blog;
