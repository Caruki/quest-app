const pollApiURL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/Caruki/quest-app/polls';

export async function getPoll(pollId) {
  const response = await fetch(`${pollApiURL}/${pollId}`);
  const poll = await response.json();
  return poll;
}

export async function postPoll(poll) {
  const response = await fetch(
    process.env.REACT_APP_POLLS_API ||
      'https://my-json-server.typicode.com/Caruki/quest-app/polls',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(poll)
    }
  );
  const createdPoll = await response.json();
  return createdPoll;
}

export async function patchPoll(pollId, updatedPoll) {
  const response = await fetch(`${pollApiURL}/${pollId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedPoll)
  });
  const patchedPoll = await response.json();
  return patchedPoll;
}
