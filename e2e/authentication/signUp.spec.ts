describe("Sign up flow", () => {
  it("should tap on Sign Up button", async () => {
    await element(by.id('Onboarding.SignUpButton')).tap();
  });

  it("test login screen email input", async () => {
    await element(by.id('SignUp.Email')).typeText('testing@stackedinvest.com');
  });

  it("test login screen password input", async () => {
    await element(by.id('SignUp.Password')).tap();
    await element(by.id('SignUp.Password')).typeText('S+@cked!*#56acSDqn@#)biD');
  });

  it("test login screen confirm password input", async () => {
    await element(by.id('SignUp.ConfirmPassword')).tap();
    await element(by.id('SignUp.ConfirmPassword')).typeText('S+@cked!*#56acSDqn@#)biD');
  });

  it("test login screen full name input", async () => {
    await element(by.id('SignUp.FullName')).typeText('Carlos Knopel');
  });

  it("test login screen background container", async () => {
    await element(by.id('SignUp.Background')).tap({ x: 1, y: 1 });
    await waitFor(element(by.id('SignUp.NewsletterCheckbox'))).toBeVisible().withTimeout(2000);
  });

  it("test login screen country input", async () => {
    await element(by.id('SignUp.Country')).tap();
  });

  it("test login screen country modal selector", async () => {
    await element(by.id('Modal.LocationSelector')).tap();
  });

  it("test login screen newsletter checkbox", async () => {
    await element(by.id('SignUp.NewsletterCheckbox')).tap();
  });

  it("test login screen agreement checkbox", async () => {
    await element(by.id('SignUp.AgreementCheckbox')).tap();
  });

  it("should tap on Sign In button", async () => {
    await element(by.id('SignUp.SignUpButton')).tap();
  });
});
