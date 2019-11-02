const { device, expect, element, by, waitFor } = require('detox');

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have screen a', async () => {
    await expect(element(by.text('Tela A'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.text('Mudar para tela B')).tap();
    await expect(element(by.text('Tela B'))).toBeVisible();
  });
});
