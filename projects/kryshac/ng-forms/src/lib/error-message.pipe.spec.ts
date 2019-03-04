import { ErrorMessagePipe } from './error-message.pipe';
import { ERROR_MESSAGES } from './error-messages';

describe('ErrorMessagePipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorMessagePipe(ERROR_MESSAGES);
    expect(pipe).toBeTruthy();
  });
});
