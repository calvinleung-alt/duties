import { rest } from "msw";
import { setupServer } from "msw/node";
import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

const server = setupServer(
    rest.get('/api/duties', (req, res, ctx) => {
        return res(ctx.json([
            { id: 1, name: 'foo' },
            { id: 2, name: 'bar' },
        ]))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())