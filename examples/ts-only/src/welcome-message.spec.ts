import { getWelcomeMessage } from './welcome-message'

test('should show welcome message', () => {
  expect(getWelcomeMessage()).toMatchInlineSnapshot(`"Welcome to ts-jest!!!"`)
})

test('should not use console for error', () => {
  const consoleSpy = jest.spyOn(console, 'error');
  expect(consoleSpy).not.toHaveBeenCalled();
});
