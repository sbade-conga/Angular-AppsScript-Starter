// @OnlyCurrentDoc

function doGet(e) {
	return HtmlService.createHtmlOutputFromFile('client/index.html')
		.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
		.addMetaTag('viewport', 'width=device-width, initial-scale=1')
}

function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
	  .addItem('Start', 'showSidebar')
	  .addToUi();
}

function onInstall(e) {
	onOpen(e);
}

function showSidebar() {
	const ui = HtmlService.createHtmlOutputFromFile('client/index.html')
		.setTitle("X-Author Contracts");
	DocumentApp.getUi().showSidebar(ui);
}

function showDialog(route) {
	let ui = HtmlService.createTemplateFromFile('client/index.html');
	ui.route = route || 'home';
	ui = ui.evaluate().setWidth(800).setHeight(600);
	DocumentApp.getUi().showModalDialog( ui, 'DialogBox')
}

function showTemplate() {
	// const templateHtmlDialog = HtmlService.createHtmlOutputFromFile('Template');
	// templateHtml.setSandboxMode(HtmlService.SandboxMode.IFRAME).setWidth(800).setHeight(600);
	// DocumentApp.getUi().showDialog(templateHtmlDialog);

	const templateHtml = HtmlService.createHtmlOutputFromFile('Template')
		.setTitle("X-Author Templates");
	DocumentApp.getUi().showSidebar(templateHtml);
}

function showContract() {
	const contractHtml = HtmlService.createHtmlOutputFromFile('Contract')
		.setTitle("X-Author Contracts");
	DocumentApp.getUi().showSidebar(contractHtml);
}

function generateDoc() {
	//copy template content to new folder
	var doc = DriveApp.getFileById("");
	var folder = DriveApp.getFolderByName("Documents");

	if (folder.hasNext()) {
		var generatedDoc = doc.makeCopy("generateDoc", folder.nect());
		var body = DocumentApp.openById(generatedDoc.getId()).getBody();

		var placeholders = body.getText().match(/\{\{.*?}}/g);
		Logger.log(placeholders)

		placeholders.forEach(placeholder => {
			body.replaceText(placeholder, "Hello");
		});
	}
}