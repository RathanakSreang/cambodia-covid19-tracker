import axios from "axios";

export const newsService = {
  fetchNewsList,
  fetchNewsDetail,
};

function fetchNewsList(options) {
  return axios.get("/v1/news_list",
    {params: { ...options }});
}

function fetchNewsDetail(id) {
  return axios.get("/v1/news" + id);
}
