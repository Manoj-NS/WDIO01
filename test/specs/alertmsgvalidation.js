describe('Types of alert messages', function () {
    it('Validating Alert Messages', async () => {

        await browser.setTimeout({ 'implicit': 8000 });

        // Maximize the browser window
        await browser.maximizeWindow();

        await browser.url('https://demo.automationtesting.in/Alerts.html');
        await browser.pause(5000);

        const alertButton1 = await $('[onclick="alertbox()"]');
        await alertButton1.click();

        //wait for alert to be displayed
        await browser.waitUntil(async () => {
            return await browser.isAlertOpen();
        }, {
            timeout: 5000,
            timeoutMsg: 'Alert 1 not displayed'

        });

        //Get the alert text
        const namealertText= await browser.getAlertText();
        console.log('Alert Text: ', namealertText);
        //Validate the alert text
        expect(namealertText).toBe('I am an alert box!');
        // Accept the alert (click OK)
        await browser.pause(4000);
        await browser.acceptAlert();

        const alertElement = await $('a[href="#CancelTab"]');
        await alertElement.waitForDisplayed({ timeout: 5000 });
        const alertMsg2 = await alertElement.getText();
        await expect(alertMsg2.trim()).toBe('Alert with OK & Cancel');
        await alertElement.click();

        const alertElement2 = await $('[onclick="confirmbox()"]');
        await alertElement2.waitForDisplayed({timeout: 5000});
        const alertMsg3 = await alertElement2.getText();
        await expect (alertMsg3.trim()).toBe('click the button to display a confirm box');
        await alertElement2.click();

        await browser.pause(4000);

    //  To get the alert text and click Ok and Cancel
        const name2alertText= await browser.getAlertText();
        console.log('Alert2 Text: ', name2alertText);

        expect(name2alertText).toBe('Press a Button !');
        await browser.pause(5000);
       // await browser.acceptAlert();
        await browser.dismissAlert();

        await browser.pause(5000);

        const alertElement3= await $('#demo');
        await alertElement3.waitForDisplayed({timeout: 5000});

        const alertMsg4= await alertElement3.getText();
        await expect(alertMsg4).toBe('You Pressed Cancel');

        await browser.pause(5000);

        const alertElement4 = await $('a[href="#Textbox"]');
        await alertElement4.waitForDisplayed({ timeout: 5000 });
        const alertMsg5 = await alertElement4.getText();
        await expect(alertMsg5.trim()).toBe('Alert with Textbox');
        await alertElement4.click();

        await browser.pause(5000);

        const alertElement5 = await $('[onclick="promptbox()"]');
        await alertElement5.waitForDisplayed({timeout: 5000});
        const alertMsg6 = await alertElement5.getText();
        await expect (alertMsg6.trim()).toBe('click the button to demonstrate the prompt box');
        await alertElement5.click();

        await browser.pause(4000);

        //Get the alert text
        const namealert3Text= await browser.getAlertText();
        console.log('Alert Text: ', namealert3Text);

        //Validate the alert text
        expect(namealert3Text).toBe('Please enter your name');

        // (To clear and Enter text)
    
        await browser.sendAlertText('');
        await browser.sendAlertText('Test Message');
        await browser.acceptAlert();
        await browser.pause(4000);




        



    })
})