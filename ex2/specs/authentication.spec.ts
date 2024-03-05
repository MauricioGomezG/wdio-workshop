import { LoginScreen } from "../pageobjects/LoginScreen";
import { NavigationBar } from "../pageobjects/NavigationBar";

describe("Authentication Tests", ()=>{

	it("Login Page", async ()=>{

		let navBar = new NavigationBar();
		let loginScreen = new LoginScreen();

		await navBar.goToLogin();
		await loginScreen.verifyIsLoginScreen();
		await loginScreen.login("not an email", "1234567");
		console.log(`method value: ${loginScreen.emailErrorMessageIsPresent()}`);
		await expect(loginScreen.emailErrorMessageIsPresent()).toEqual(true);
		await expect(loginScreen.passwordErrorMessageIsPresent()).toEqual(true);
	})
})