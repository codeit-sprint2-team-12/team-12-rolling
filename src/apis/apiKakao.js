function shareMessage(id) {
  if (window.Kakao) {
    const kakao = window.Kakao;

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '롤링-12팀',
        description: '소중한 당신의 친구에게 롤링페이퍼를 작성해보세요!',
        imageUrl: 'https://ifh.cc/g/wVtz1q.png',
        link: {
          mobileWebUrl: `https://fluffy-shortbread-07838a.netlify.app/post/${id}`,
          webUrl: `https://fluffy-shortbread-07838a.netlify.app/post/${id}`,
        },
      },
      buttons: [
        {
          title: '작성하러 가기',
          link: {
            mobileWebUrl: `https://fluffy-shortbread-07838a.netlify.app/post/${id}`,
            webUrl: `https://fluffy-shortbread-07838a.netlify.app/post/${id}`,
          },
        },
      ],
    });
  }
}

export default shareMessage;
