import tw, { styled } from "twin.macro";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    ${tw`text-purple-300 m-0 p-0 [box-sizing:border-box] [border:0_solid] font-sans`};
  }
`;

export const Overlay = styled.div(({ isStarted }) => [
  tw`absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 [background-color:rgba(0,0,0,.6)] [transition:all_0.3s_ease-out]`,
  isStarted && tw`opacity-0`,
]);

export const StartOver = styled.div`
  ${tw`bg-white [border-width:3px] [width:400px] flex justify-center items-center p-4 font-bold [font-size:2rem] text-gray-600 rounded-2xl cursor-pointer [box-shadow:0_10px_10px_rgba(0,0,0,.2)] [transition:all_0.1s_ease-in]`}
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(1);
  }
`;
