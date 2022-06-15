import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getApi } from "../../../api/api";
import Card2 from "../../card/Card2";

const Wrapper = styled.div`
  .dashed-loading {
    --blue: #29f9;
    position: relative;
    height: 50px;
    margin-bottom: 50px;
  }

  .dashed-loading:after,
  .dashed-loading:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .dashed-loading:before {
    z-index: 5;
    border: 3px dashed var(--blue);
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s linear infinite;
    animation: dashed 1s linear infinite;
  }

  .dashed-loading:after {
    z-index: 10;
    border: 3px solid var(--blue);
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s ease infinite;
    animation: dashed 1s ease infinite;
  }

  @keyframes dashed {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Photos = () => {
  const [images, setImage] = useState([]);
  const [pageNext, setPageNext] = useState(1);
  const [load, setLoad] = useState(true);
  const [rejectData, setRejectData] = useState(false);
  const [displayLoading, setDisplayLoading] = useState(false);

  const wrapper = useRef();
  const [isLoad, setIsLoad] = useState(true);

  const apiUrl = `https://picsum.photos/v2/list?page=${pageNext}&limit=8`;

  useEffect(() => {
    handleCallApi();
    setLoad(false);
  }, [load]);

  useEffect(() => {
    const handleScroll = () => {
      const wrapperHeight = wrapper.current.scrollHeight;
      const scroll = window.pageYOffset + window.innerHeight;

      if (scroll >= wrapperHeight) {
        setDisplayLoading(true);

        setTimeout(() => {
          setLoad(true);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [load]);

  useEffect(() => {
    return () => {
      console.log(0);
      setIsLoad(false);
    };
  }, []);

  async function handleCallApi() {
    if (load) {
      try {
        const data = await getApi(apiUrl);
        setDisplayLoading(false);

        if (isLoad) {
          setImage([...images, ...data]);
          setPageNext(pageNext + 1);
        }
      } catch (error) {
        setRejectData(true);
        console.log("err");
      }
    }
  }

  return (
    <Wrapper ref={wrapper} className="py-4">
      <div className=" grid grid-cols-4 gap-x-5 gap-y-[100px] p-[50px] pb-28 justify-center ">
        {Array.isArray(images) &&
          images.length > 0 &&
          images.map((item) => (
            <Card2
              key={item.id}
              image={item.download_url}
              author={item.author.slice(0, 10)}
              primary
              secondary
            ></Card2>
          ))}
      </div>
      {rejectData && <div className="test">Test</div>}
      {displayLoading && <div className="dashed-loading"></div>}
    </Wrapper>
  );
};

export default Photos;
