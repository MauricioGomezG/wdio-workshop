import { BaseScreen } from "./BaseScreen";

export class NavigationBar extends BaseScreen{

	loginMenu: string = '//android.widget.Button[@content-desc="Login"]'

	async goToLogin(): Promise<void>{
		await this.clickElement(this.loginMenu);
	}
	
}