import tw, { css, styled } from "twin.macro";

export const TopBarContainer = tw.div`absolute flex flex-col items-center w-full`;

export const StatusContainer = tw.div`w-full flex px-5 py-4 justify-between items-center mb-5`;

export const PlayerOneBar = tw.div`bg-red-600 w-full h-12 rounded-l-full relative overflow-hidden [border-width:3px] [border-right-width:0] border-white`;

export const PlayerOneInner = styled.div(({ health }) => [
  tw`bg-green-400 absolute h-full right-0 [transition:all_0.3s]`,
  css`
    width: ${health}%;
  `,
]);

export const PlayerTwoBar = tw.div`bg-red-600 w-full h-12 rounded-r-full relative overflow-hidden [border-width:3px] [border-left-width:0] border-white`;

export const PlayerTwoInner = styled.div(({ health }) => [
  tw`bg-green-400 absolute h-full [transition:all_0.1s]`,
  css`
    width: ${health}%;
  `,
]);

export const Timer = tw.div`flex justify-center items-center rounded-lg w-20 h-20 flex-shrink-0 bg-white`;

export const Counter = tw.div`flex justify-center items-center bg-yellow-500 w-16 h-16 rounded-full [font-size:2.2rem] font-bold text-gray-800`;

export const Result = tw.div`[font-size:4rem] font-bold text-white`;
