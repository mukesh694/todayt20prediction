export async function getMatches() {

  const res = await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=8b3123ee-6f8c-4932-99f4-b71119aceffd&offset=0"
  );

  const data = await res.json();

  return data.data;
}