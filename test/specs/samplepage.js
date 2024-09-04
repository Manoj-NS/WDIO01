describe('Sample Page', function () {
    it('URL Checking', async () => {

        await browser.setTimeout({ 'implicit': 8000 });

        // Maximize the browser window
        await browser.maximizeWindow();

        await browser.url('https://www.globalsqa.com/samplepagetest/');
        await browser.pause(5000);

        const submitButton = await $('[type="submit"]');
        await submitButton.click();

        //wait for alert to be displayed
        await browser.waitUntil(async () => {
            return await browser.isAlertOpen();
        }, {
            timeout: 5000,
            timeoutMsg: 'Alert message not found'

        });

        //Get the alert text
        const namealertText= await browser.getAlertText();
        console.log('Name Alert Text: ', namealertText);

        await browser.pause(4000);

        //Validate the alert text
      //  expect(namealertText).toBe('Please fill in this field.');












        //await $('[type="submit"]').click();

        // await $('[id="g2599-name"]').setValue('Manoj');


    })
})