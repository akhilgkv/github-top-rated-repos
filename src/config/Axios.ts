interface Config {
  baseURL: string;
  headers: {
    common: Record<string, string>;
    post: Record<string, string>;
    put: Record<string, string>;
    delete: Record<string, string>;
  };
}

const config: Config = {
  baseURL: "https://api.github.com",
  headers: {
    common: {
      Accept: 'application/json',
      'X-Requested-With': 'XmlHttpRequest'
    },
    post: {
      'Content-Type': 'application/json',
    },
    put: {
      'Content-Type': 'application/json',
    },
    delete: {
      'Content-Type': 'application/json',
    },
  },
}

export default config
