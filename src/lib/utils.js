export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return formatter.format(date);
};
