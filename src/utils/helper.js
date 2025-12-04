export const truncate = (str, n) =>
  str?.length > n ? str.substr(0, n - 1) + "..." : str || "";

// >==> Function to extract video ID from the full YouTube URL
export const getYoutubeVideoId = (url) => {
  try {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v");
  } catch {
    console.error("Invalid trailer URL:", url);
    return null;
  }
};
