
describe('Demo Tests', function () {

    it('My First Test', async () => {

      await browser.setTimeout({ 'implicit': 8000 })

        browser.url('https://google.com')

        browser.pause(5000)

        await $('[name="q"]').setValue('WebdriverIO')

      //  await $('input[type="submit"]').click()

          browser.keys('Enter')

        // browser.pause(5000)

       //  await $('[span="WebdriverIO"]').isDisplayed()

    //     await $('[a="Getting Started"]').click()

      //  await $('[.="VuuXrf"]').isDisplayed()

        // const el= await $('[span=WebdriverIO]')
        // await browser.waitUntil(() => el.isDisplayed())

      //  await expect(el).toHaveElementClass('WebdriverIO')


       // const el = await $('[name="btnK"]')
        // let clickable = await el.isClickable();
        // console.log(clickable); // outputs: true or false

        // await browser.waitUntil(() => el.isClickable())
     

    

        browser.pause(5000)
    })

})