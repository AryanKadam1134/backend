require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const githubData = {
  login: "AryanKadam1134",
  id: 118539180,
  node_id: "U_kgDOBxDDrA",
  avatar_url: "https://avatars.githubusercontent.com/u/118539180?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/AryanKadam1134",
  html_url: "https://github.com/AryanKadam1134",
  followers_url: "https://api.github.com/users/AryanKadam1134/followers",
  following_url:
    "https://api.github.com/users/AryanKadam1134/following{/other_user}",
  gists_url: "https://api.github.com/users/AryanKadam1134/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/AryanKadam1134/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/AryanKadam1134/subscriptions",
  organizations_url: "https://api.github.com/users/AryanKadam1134/orgs",
  repos_url: "https://api.github.com/users/AryanKadam1134/repos",
  events_url: "https://api.github.com/users/AryanKadam1134/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/AryanKadam1134/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Aryan Kadam",
  company: null,
  blog: "https://aryans-portfolio-blush.vercel.app/",
  location: "Kalyan, Thane",
  email: null,
  hireable: null,
  bio: "CSE (AIML) | Full-Stack Web Developer | UI/UX Developer",
  twitter_username: "aryan61434",
  public_repos: 32,
  public_gists: 0,
  followers: 1,
  following: 2,
  created_at: "2022-11-18T13:06:48Z",
  updated_at: "2025-11-22T15:49:13Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/githubData", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
