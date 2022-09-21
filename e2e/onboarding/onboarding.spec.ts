describe("Onboarding", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have a horizontal scrollable onboarding screen", async () => {
    await element(by.id('Onboarding.ExplainerSeriesList')).swipe('left');
    await element(by.id('Onboarding.ExplainerSeriesList')).swipe('left');
    await element(by.id('Onboarding.ExplainerSeriesList')).swipe('left');

    await element(by.id('Onboarding.ExplainerSeriesList')).swipe('right');
    await element(by.id('Onboarding.ExplainerSeriesList')).swipe('right');
    await element(by.id('Onboarding.ExplainerSeriesList')).swipe('right');
  });
});