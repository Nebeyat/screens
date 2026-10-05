import formatDistanceToNow from "date-fns/formatDistanceToNow";

export const ago = (data) => {
  if (!data) return null;

  return formatDistanceToNow(new Date(data), { addSuffix: true });
};