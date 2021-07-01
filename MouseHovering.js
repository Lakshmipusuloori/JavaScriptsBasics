


describe("validate Alert Handle", function () {
    it("validate Handle Alert with ok Button", function () {
  
    browser.ignoreSynchronization=true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
     browser.get("https://www.amazon.com");

     browser.actions().mouseMove(element(by.xpath("//span[text()='Account & Lists']"))).perform().then(function(){
         browser.sleep(3000);
     })

     
    })
})