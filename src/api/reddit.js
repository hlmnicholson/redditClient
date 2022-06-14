// Load the data from the server

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch('https://www.reddit.com/r/popular.json');
  const json = await response.json();

  return json.children.map(post => post.data);
}