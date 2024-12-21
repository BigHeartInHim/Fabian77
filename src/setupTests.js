import '@testing-library/jest-dom/extend-expect';

beforeAll(() => {
    window.scrollTo = jest.fn(); // Mocking window.scrollTo
});
