import axios from "axios";

export const commonService = {
  fetchDashboardData,
  getLinks,
  getContacts,
};

function fetchDashboardData(options) {
  return axios.get("/v1/dashboard",
    {params: { ...options }});
}

function getLinks(options) {
  return axios.get("/v1/links",
    {params: { ...options }});
}

function getContacts(options) {
  return axios.get("/v1/contacts",
    {params: { ...options }});
}
