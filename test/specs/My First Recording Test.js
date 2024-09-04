describe("My First Recording Test", () => {
  it("tests My First Recording Test", async () => {
    await browser.setWindowSize(805, 641)
    
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").doubleClick()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#username").doubleClick()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("aria/This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("aria/ Login").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.$("aria/Logout").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
