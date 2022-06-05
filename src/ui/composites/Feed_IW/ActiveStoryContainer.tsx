/*The  comoponent diplays content based on that data passed to it. I.e. stories, bookable s, events and other 
objects */
import Type from "../../elements/Type";
import Link from "next/link";
import moment from "moment";
import { useEffect, useState, FC } from "react";
import Media from "../Media";
import clsx from "clsx";

interface ActiveStoryContainerProps {
  story: any;
  close: any;
}

const ActiveStoryContainer: FC<ActiveStoryContainerProps> = ({ story, close }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    let parent;
    if (window) parent = document.querySelector(".x123")!.parentElement;

    while (parent) {
      const hasOverflow = getComputedStyle(parent).overflow;
      if (hasOverflow !== "visible") {
        console.log(hasOverflow, parent);
      }
      parent = parent.parentElement;
    }
  });

  return (
    <div>
      <div className="x123">
        <button onClick={close}>
          <img height="25" width="25" src="/media/images/back-arrow.png" />
        </button>
      </div>
      <div >
        <div>
          <div>
            <div>
              <section>
                <div>
                  {/*<div>
                       <div
                        className={classes.header}
                        avatar={<Avatar aria-label="recipe" src={story.fields.profile.fields?.profilepic.fields?.file.url} className={classes.avatar} />}
                        // action={
                        //   <IconButton aria-label="settings">
                        //     <MoreVertIcon />
                        //   </IconButton>
                        // }
                        title={story.fields.profile.fields?.profilename}
                        subheader={moment(`${story.sys.createdAt}`, "YYYYMMDD").fromNow()}
                      />
                    </div> */}
                </div>
              </section>
              <section>
                <Type variant="base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus fugit doloribus quaerat incidunt dicta blanditiis numquam modi, atque at
                  amet reprehenderit voluptatum velit aspernatur cupiditate animi quas corporis, nam magni. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem? Modi praesentium quae beatae fugiat reprehenderit facilis cum, distinctio
                  voluptates consequuntur autem magni optio cupiditate recusandae possimus rerum tempore mollitia, voluptate totam obcaecati itaque maxime,
                  sapiente voluptatum quam. Fuga exercitationem distinctio quis repudiandae expedita dolorum sint ullam officiis quos! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem?
                </Type>
              </section>
              <section>
                <Type variant="base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus fugit doloribus quaerat incidunt dicta blanditiis numquam modi, atque at
                  amet reprehenderit voluptatum velit aspernatur cupiditate animi quas corporis, nam magni. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem? Modi praesentium quae beatae fugiat reprehenderit facilis cum, distinctio
                  voluptates consequuntur autem magni optio cupiditate recusandae possimus rerum tempore mollitia, voluptate totam obcaecati itaque maxime,
                  sapiente voluptatum quam. Fuga exercitationem distinctio quis repudiandae expedita dolorum sint ullam officiis quos! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem?
                </Type>
              </section>
              <section>
                <Type variant="base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus fugit doloribus quaerat incidunt dicta blanditiis numquam modi, atque at
                  amet reprehenderit voluptatum velit aspernatur cupiditate animi quas corporis, nam magni. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem? Modi praesentium quae beatae fugiat reprehenderit facilis cum, distinctio
                  voluptates consequuntur autem magni optio cupiditate recusandae possimus rerum tempore mollitia, voluptate totam obcaecati itaque maxime,
                  sapiente voluptatum quam. Fuga exercitationem distinctio quis repudiandae expedita dolorum sint ullam officiis quos! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem?
                </Type>
              </section>
              <section>
                <Type variant="base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus fugit doloribus quaerat incidunt dicta blanditiis numquam modi, atque at
                  amet reprehenderit voluptatum velit aspernatur cupiditate animi quas corporis, nam magni. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem? Modi praesentium quae beatae fugiat reprehenderit facilis cum, distinctio
                  voluptates consequuntur autem magni optio cupiditate recusandae possimus rerum tempore mollitia, voluptate totam obcaecati itaque maxime,
                  sapiente voluptatum quam. Fuga exercitationem distinctio quis repudiandae expedita dolorum sint ullam officiis quos! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem?
                </Type>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <a data-key="key" onClick={(e) => console.log(e)}>
      <div>
        <div>
          <div>
            <img alt="kitty" src="/src" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ActiveStoryContainer;
