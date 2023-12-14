const ROOT_URL = 'https://rolling-api.vercel.app/2-12';

/* ==================== */
// GET
/* ==================== */

async function getRecipients(id = '') {
  const path = id ? `recipients/${id}/` : `recipients/`;
  const response = await fetch(`${ROOT_URL}/${path}`);
  if (!response.ok) {
    throw new Error('대상을 불러오는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}

async function getRecipientMessages(id = '') {
  if (!id) {
    throw new Error('불러올 대상을 지정해주세요.');
  }
  const response = await fetch(`${ROOT_URL}/recipients/${id}/messages/`);
  if (!response.ok) {
    throw new Error('대상을 불러오는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}

async function getRecipientReactions(id = '') {
  if (!id) {
    throw new Error('불러올 대상을 지정해주세요.');
  }
  const response = await fetch(`${ROOT_URL}/recipients/${id}/reactions/`);
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

/* ==================== */
// DELETE
/* ==================== */

async function deleteRecipients(id = '') {
  if (!id) {
    throw new Error('삭제 대상을 지정해주세요.');
  }
  const response = await fetch(`${ROOT_URL}/recipients/${id}/`);
  if (!response.ok) {
    throw new Error('대상을 삭제하는데 실패했습니다.');
  }
  alert('삭제에 성공했습니다.');
}