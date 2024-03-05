import { BaseScreen } from "./BaseScreen";

export class LoginScreen extends BaseScreen{

	scrollView = '//android.widget.ScrollView[@content-desc="Login-screen"]';
	emailField = '//android.widget.EditText[@content-desc="input-email"]';
	passwordField = '~input-password';
	loginBtn = '//android.view.ViewGroup[@content-desc="button-LOGIN"]';
	emailError = '//android.widget.TextView[@text="Please enter a valid email address"]';
	passError = '//android.widget.TextView[@text="Please enter at least 8 characters"]';

	async verifyIsLoginScreen(): Promise<void>{
		await this.waitForElementToBePresent(this.scrollView)
	}

	async login(username:string, password: string){
		await this.sendValue(this.emailField, username);
		await this.sendValue(this.passwordField, password);
		await this.clickElement(this.loginBtn);
	}

	async emailErrorMessageIsPresent():Promise<boolean>{
		// console.log(`Respuesta Metodo: ${await (await $(this.emailError)).isDisplayed()}`)
		// return await (await $(this.emailError)).isDisplayed();
		let flag = false
		flag = await this.elementIsPresent(this.emailError);
		console.log(`Respuesta Metodo: ${flag}`)
		return flag;
	}

	async passwordErrorMessageIsPresent(): Promise<boolean>{
		return await (await $(this.passError)).isDisplayed();
		// return await this.elementIsPresent(this.passError);
	}

}