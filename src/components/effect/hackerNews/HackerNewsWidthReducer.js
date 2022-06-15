import React, { useEffect, useReducer, useRef } from "react";
import { getApi } from "../../../api/api";

const initialState = {
  hists: [],
  inputValue: "",
  loading: true,
  enpoint: `https://hn.algolia.com/api/v1/search?query=""`,
};

const setHists = (payload) => {
  return {
    type: "SET_HISTS",
    payload,
  };
};
const setinputValue = (payload) => {
  return {
    type: "SET_INPUT_VALUE",
    payload,
  };
};
const setLoading = (payload) => {
  return {
    type: "SET_LOADING",
    payload,
  };
};
const setenpoint = (payload) => {
  return {
    type: "SET_ENPOINT",
    payload,
  };
};

const reduce = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET_HISTS": {
      newState = {
        ...state,
        hists: action.payload,
      };
      break;
    }
    case "SET_LOADING": {
      newState = {
        ...state,
        loading: action.payload,
      };
      break;
    }
    case "SET_INPUT_VALUE": {
      newState = {
        ...state,
        inputValue: action.payload,
      };
      break;
    }
    case "SET_ENPOINT": {
      newState = {
        ...state,
        enpoint: action.payload,
      };
      break;
    }

    default:
      break;
  }
  // console.log(newState);
  return newState;
};

const HackerNewsWidthReducer = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const { hists, inputValue, loading, enpoint } = state;

  const handleCallAPi = useRef({});

  useEffect(() => {
    handleCallAPi.current();
    console.log("re-render");
  }, [enpoint]);

  handleCallAPi.current = async () => {
    dispatch(setLoading(true));
    try {
      const response = await getApi(enpoint);

      dispatch(setLoading(false));
      dispatch(setHists(response.hits));
    } catch (error) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
      setTimeout(() => {
        alert(error);
      }, 1500);
    }
  };

  const handleSubmit = () => {
    dispatch(
      setenpoint(`https://hn.algolia.com/api/v1/search?query=${inputValue}`)
    );
  };

  return (
    <div className="flex flex-col w-[500px] mx-auto my-10">
      <div className="flex">
        <input
          className="p-4 flex-1"
          type="text"
          defaultValue={inputValue}
          placeholder="search course"
          onChange={(e) => dispatch(setinputValue(e.target.value))}
        />
        <button className="bg-blue-500 text-white p-3" onClick={handleSubmit}>
          search
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-5 bg-[#222] items-center p-3">
        {loading && (
          <div className="w-12 h-12 rounded-full m-auto border-4 border-r-transparent border-[#29f9] animate-spin "></div>
        )}

        {!loading &&
          hists.length > 0 &&
          hists.map((item) => (
            <h3 key={item.objectID} className="bg-[#444] p-2 text-white">
              {item._highlightResult?.title?.value}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNewsWidthReducer;
