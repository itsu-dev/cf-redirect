import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
	URL: string
}

const app = new Hono<{ Bindings: Bindings }>();
app.use(cors());
app.get('*', (c) => {
	return c.redirect(c.env.URL, 301);
});

export default app;
