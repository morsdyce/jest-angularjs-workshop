import { isCurrentUserAdmin } from '../03-mocking-modules';

jest.mock('../external-api', () => {
  return {
    getCurrentUser() {
      return {
        username: 'bob',
        isAdmin: false
      }
    }
  };
});

test('mocking current user', () => {
  expect(isCurrentUserAdmin()).toBe(false);
});