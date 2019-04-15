import { User } from './User';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(null, null, null, null, null)).toBeTruthy();
  });
});
