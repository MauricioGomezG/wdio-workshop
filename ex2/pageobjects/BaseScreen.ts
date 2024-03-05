export class BaseScreen{
	constructor(){}

	protected async waitForElementToBePresent(locator:string, timeout: number = 10){
		(await $(locator)).waitForDisplayed({timeout:timeout});
	}

	protected async elementIsPresent(locator: string): Promise<boolean>{
		await (await $(locator)).waitForDisplayed();
		console.log(`Respuesta Metodo: ${await (await $(locator)).isDisplayed()}`)
		return await $(locator).isDisplayed();
	}

	protected async clickElement(locator: string):Promise<void>{
		let element: WebdriverIO.Element = await $(locator);
		await element.isDisplayed();
		await element.click();
	} 

	protected async sendValue(locator:string, value: string , timeout: number = 10){
		let element: WebdriverIO.Element = await $(locator);
		await element.waitForDisplayed({timeout:timeout});
		await element.setValue(value);
	}
}