//Import Data models
import { requests } from "./helpers";

/**
 * Global API
 *
 * @author Neeraj Patel
 */

//RSS Feed
export const MediumAPI = {
  getFeed: (): Promise<any> => {
    return requests.get("/@neerajhpatel");
  },
};
