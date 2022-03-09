import { MediumAPI } from "../../../api";

const Service = {
  // Get RSS feed and return articles from feed
  getArticles: async function () {
    const res = await MediumAPI.getFeed();
    return res.items;
  },
};

export default Service;
