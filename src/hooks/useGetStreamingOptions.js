import { useEffect } from "react";
import {
  STREAMING_AVAILABILITY_API,
  STREAMING_AVAILABILITY_API_OPTIONS,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addStreamingOptions } from "../utils/moviesSlice";
import capitalizeWord from "../utils/capitalizeWord";

const useGetStreamingOptions = (moviedId) => {
  const dispatch = useDispatch();
  const fetchStreamingOptions = async () => {
    if (!moviedId) return;
    const data = await fetch(
      STREAMING_AVAILABILITY_API + moviedId,
      STREAMING_AVAILABILITY_API_OPTIONS
    );
    const json = await data.json();
    const indiaData = json?.result?.streamingInfo?.in;
    if (!indiaData) return;
    const serviceAndLink = [];

    indiaData.forEach((data) => {
      const service = capitalizeWord(data.service);
      const type = capitalizeWord(data.streamingType);
      serviceAndLink.push([service, type, data.link]);
    });

    dispatch(addStreamingOptions(serviceAndLink));
  };

  useEffect(() => {
    fetchStreamingOptions();
  }, [moviedId]);
};

export default useGetStreamingOptions;
