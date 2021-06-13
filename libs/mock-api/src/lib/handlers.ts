import { rest } from 'msw';

export const handlers = [
  rest.get('/api/hello', async (req, res, ctx) => {
    return res(ctx.json({ message: 'Msw works like a charm!' }));
  }),
];
