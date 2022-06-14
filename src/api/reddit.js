// Load the data from the server

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`https://www.reddit.com/${subreddit}.json`);
  const json = await response.json();

  return json.children.map(post => post.data);
}