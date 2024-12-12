import { IncomingMessage, ServerResponse } from 'http';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { NextApiRequest } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  target: 'https://api.mangadex.org', // Forward to MangaDex API
  changeOrigin: true,
  pathRewrite: {
    '^/api/source': '', // Remove /api/source from the path
  },
});

export default function handler(req: NextApiRequest, res: ServerResponse<IncomingMessage>) {
  return proxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }
    return result;
  });
}
