const { browser } = require("protractor");


describe("validate Alert Handle", function () {
    it("validate Handle Alert with ok Button", function () {
  
    browser.ignoreSynchronization=true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
     browser.get("https://www.testandquiz.com/selenium/testing.html");
     
     element(by.xpath("//button[text()='Generate Confirm Box']")).click();

     browser.switchTo().alert().accept().then(function(){
         browser.sleep(4000);
     })
     // String text = driver.find().gettest();

     element(by.id("demo")).getText().then(function(AlertText){
         console.log(AlertText)
     })

     element(by.xpath("//button[text()='Generate Confirm Box']")).click();
     browser.switchTo().alert().dismiss().then(function(){
        browser.sleep(4000);
    })

    //var text = 

    element(by.id("demo")).getText().then(function(CancelAlert){
        console.log(CancelAlert)
    })

    browser.actions().doubleClick(element(by.id("dblClkBtn"))).perform().then(function(){
        browser.sleep(3000)
    })
    browser.switchTo().alert().getText().then(function(AlertText){
        console.log(AlertText);
    })
    browser.switchTo().alert().accept().then(function(){
        browser.sleep(2000);
    })

    });
  });
  