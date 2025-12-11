import Lottie from "lottie-react";
import GradientLoader from "../../../public/loading-animation/gradient loader 02.json";
import SandyLoader from "../../../public/loading-animation/Sandy Loading.json";


export const GradientLoadingAnimation = () => {
  return <Lottie animationData={GradientLoader} />;
};

export const SandyLoadingAnimation = () => {
  return <Lottie animationData={SandyLoader} />;
};
