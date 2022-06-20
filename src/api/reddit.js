// Load the data from the server
export const API_ROOT = 'https://www.reddit.com'

// make all try/catch for error handling?

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map(child => child.data);
}

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map(child => child.data);
}

  // If you want to search for “cake recipes”:

  // Original URL: https://www.reddit.com/search?q=cake%20recipes
  // JSON URL: https://www.reddit.com/search.json?q=cake%20recipes

export const searchRedditPosts = async (searchTerm) => {
  //trim?
  const query = searchTerm.replaceAll(' ', '%20');
  const response = await fetch(`${API_ROOT}/search.json?q=${query}`);
  const json = await response.json();
  console.log(json);

  return json.data.children.map(child => child.data);
}