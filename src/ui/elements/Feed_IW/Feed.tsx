import Card from "../Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { getContent } from "../../../hooks/contentful";
import { FC } from "react";
import Type from "../../core/Type";
// import CTA from "../../Elements/Cta";
// import OpenStory from "./OpenStory";

interface ContentFeedProps {
  activeStory?: any;
  currentUser?: any;
  limit?: number;
}
function fetchData() {
  console.log("getting data...");
}

function refresh() {
  console.log("refreshing...");
}

const items: any[] = [];
const ContentFeed: FC<ContentFeedProps> = ({ activeStory, currentUser, limit = 22 }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <div className=" max-w-lg m-auto mb-12">
        <InfiniteScroll
          dataLength={content.length} //This is important field to render the next data
          next={fetchData}
          hasMore={false}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <Type variant="hint">Nice, looks like you have reached the end.</Type>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={<h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>}
          releaseToRefreshContent={<h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>}
        >
          {content.map((content) => (
            <Card kind="story" data={content} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );

  async function init() {
    const content = await getContent({ limit, type: "story" });
    console.log(content);
    setContent(content);
  }
};

export default ContentFeed;
