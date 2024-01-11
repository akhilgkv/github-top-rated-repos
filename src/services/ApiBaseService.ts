import axios, { AxiosResponse } from 'axios';
import config from '@/config/Axios';
import * as Http from '@/helpers/Http';
import { isEmpty } from '@/helpers/Utils';

/**
 * Default Axios API configuration.
 */
export const FETCH = () => {
  return axios.create(config);
};

/**
 * Represents the response structure.
 */
interface Response {
  requestMade: boolean;
  data?: any;
  status?: number;
  error?: any;
}

/**
 * Generates an async request to the API.
 * @param {object} settings - Request settings.
 * @returns {Promise<Response>} - An instance of Response class.
 */
export async function request({
  url = '',
  method = Http.VERBS.GET,
  payload = {},
}: {
  url?: string;
  method?: number;
  payload?: object;
} = {}): Promise<Response> {
  let response: Response = { requestMade: true };
  let apiResponse: AxiosResponse | undefined;

  try {
    if (url && isEmpty(url)) {
      response.requestMade = false;
      throw new Error('`url` cannot be null, undefined, or empty');
    } else {
      switch (method) {
        case Http.VERBS.GET:
          apiResponse = await FETCH().get(url, { params: payload });
          break;
        case Http.VERBS.POST:
          apiResponse = await FETCH().post(url, payload);
          break;
        case Http.VERBS.PUT:
          apiResponse = await FETCH().put(url, payload);
          break;
        case Http.VERBS.PATCH:
          apiResponse = await FETCH().patch(url, payload);
          break;
        case Http.VERBS.DELETE:
          apiResponse = await FETCH().delete(url, payload);
          break;
        default:
          throw new Error('method must match one of the API HTTP VERB types');
      }

      if (apiResponse) {
        response.data = apiResponse.data;
        response.status = apiResponse.status;
      } else {
        response.requestMade = false;
        throw new Error('Invalid or Empty API Response');
      }
    }
  } catch (err) {
    response.error = new Error(`Axios Error, ${err}`);
    response.status = response.error.status;
  }
  return response;
}

