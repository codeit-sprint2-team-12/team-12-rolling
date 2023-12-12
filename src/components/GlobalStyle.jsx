import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  /* colors */
  --white:#FFF;
  --black:#000;
  --Error:#DC3A3A;
  --Surface:#F6F8FF;

  /* Purple */
  --purple-100:#F8F0FF;
  --purple-200:#ECD9FF;
  --purple-300:#DCB9FF;
  --purple-400:#C894FD;
  --purple-500:#AB57FF;
  --purple-600:#9935FF;
  --purple-700:#861DEE;
  --purple-800:#6E0AD1;
  --purple-900:#5603A7;

  /* Orange */
  --orange-100:#FFF0D6;
  --orange-200:#FFE2AD;
  --orange-300:#FFC583;
  --orange-400:#FFAE65;
  --orange-500:#FF8832;

  /* Blue */
  --blue-100:#E2F5FF;
  --blue-200:#B1E4FF;
  --blue-300:#7CD2FF;
  --blue-400:#34B9FF;
  --blue-500:#00A2FE;

  /* Green */
  --green-100:#E4FBDC;
  --green-200:#D0F5C3;
  --green-300:#9BE282;
  --green-400:#60CF37;
  --green-500:#2BA600;

  /* Grayscale */
  --gray-100:#F6F6F6;
  --gray-200:#EEE;
  --gray-300:#CCC;
  --gray-400:#999;
  --gray-500:#555;
  --gray-600:#4A4A4A;
  --gray-700:#3A3A3A;
  --gray-800:#2B2B2B;
  --gray-900:#181818;
};


html {
 font-size: 62.5%;
 font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
