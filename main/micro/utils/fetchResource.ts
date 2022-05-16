export const fetchResource = async (url: string) => {
  const res = await fetch(url);
  return await res.text();
};
