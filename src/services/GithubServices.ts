import * as API from '@/services/ApiBaseService';
import * as Http from '@/helpers/Http';

/**
 * Base URI.
 */
const BASE_URI = '/search/repositories';

export default {
  /**
   * get Repositories List
   * @async
   * @param {object} options
   * @param {object} options.requestSettings - Settings to pass on to the request.
   */
  async getRepositoriesList({ requestSettings = {} }: { requestSettings: object; }) {
    return API.request({
      url: `${BASE_URI}`,
      method: Http.VERBS.GET,
      payload: requestSettings,
    });
  },
};
