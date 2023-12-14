const ROOT_URL = 'https://rolling-api.vercel.app/2-12';

/* ==================== */
// GET
/* ==================== */
async function getRecipients() {
  const response = await fetch(`${ROOT_URL}/recipients/`);
  if (!response.ok) {
    throw new Error('대상을 불러오는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}

/* ==================== */
// POST
/* ==================== */
async function postRecipients(data) {
  const response = await fetch(`${ROOT_URL}/recipients/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('대상 생성을 하는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}
