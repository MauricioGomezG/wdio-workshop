describe("Authentication Tests", ()=>{

	it("Login Page", async ()=>{
		let loginMenu = $('//android.widget.Button[@content-desc="Login"]/android.widget.TextView[1]');
		let emailField = $('//android.widget.EditText[@content-desc="input-email"]');
		let passwordField = $('~input-password');
		let loginBtn = $('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
		let emailError = $('//android.widget.TextView[@text="Please enter a valid email address"]');
		let passError = $('//android.widget.TextView[@text="Please enter at least 8 characters"]');

		await loginMenu.click();
		await emailField.setValue("not an email");
		await passwordField.setValue("1234567");
		await loginBtn.click();

		await expect(emailError).toBeDisplayed({wait: 5000});
		await expect(passError).toBeDisplayed();
	})
})