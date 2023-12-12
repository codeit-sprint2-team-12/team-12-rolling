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


  /* Font Size */
--font-28 : {
color: var(--black);
font-family: Pretendard;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 42px; /* 150% */
letter-spacing: -0.28px;
   },

--font-24-Bold : {
color: var(--black);
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 150% */
letter-spacing: -0.24px;
   },

   --font-24-Regular : {
color: var(--black);
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 150% */
letter-spacing: -0.24px;
   },

   --font-20-Bold : {
color: var(--black);
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 150% */
letter-spacing: -0.2px;
   },

   --font-20-Regular : {
color: var(--black);
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 150% */
letter-spacing: -0.2px;
   }
--font-18-Bold : {
color: var(--black);
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 28px; /* 155.556% */
letter-spacing: -0.18px;
}

--font-18-Regular : {
color: var(--black);
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */
letter-spacing: -0.18px;
}
--font-16-Bold :{
color: var(--black);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 26px; /* 162.5% */
letter-spacing: -0.16px;
},

--font-16-Regular : {
color: var(--black);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px; /* 162.5% */
letter-spacing: -0.16px;
},

--font-15-Bold:{
color:var(--black);
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 146.667% */
letter-spacing: -0.15px;
},
--font-15-Regular:{
color: var(--black);
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 146.667% */
letter-spacing: -0.15px;
},
--font-14-Bold:{
color: var(--black);
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 142.857% */
letter-spacing: -0.07px;
},
--font-14-Regular:{
color: var(--black);
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: -0.07px;
},
--font-12-Regular:{
color: var(--black);
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 150% */
letter-spacing: -0.06px;
}
}


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
