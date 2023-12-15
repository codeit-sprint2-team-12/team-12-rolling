const ROOT_URL = 'https://rolling-api.vercel.app';

async function getBackgroundImages() {
  const response = await fetch(`${ROOT_URL}/background-images/`);
  if (!response.ok) {
    throw new Error('대상을 불러오는데 실패했습니다.');
  }
  const body = await response.json();

  return body.imageUrls;
}

export { getBackgroundImages };
