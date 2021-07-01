const { element } = require("protractor");


describe("validate Drag and Drop", function () {
    it("validate Handle Alert with ok Button", function () {
  
    browser.ignoreSynchronization=true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
    browser.get("http://demo.guru99.com/test/drag_drop.html");

    browser.actions().dragAndDrop(element(by.xpath("//a[text()=' BANK ']")) ,
     element(by.id("bank"))).perform().then(function(){
         browser.sleep(3000)
     })
     browser.actions().dragAndDrop(element(by.xpath("//a[text()=' 5000 ']")) ,
     element(by.id("amt7"))).perform().then(function(){
         browser.sleep(3000)
     })
     browser.actions().dragAndDrop(element(by.xpath("//a[text()=' SALES ']")) ,
     element(by.id("loan"))).perform().then(function(){
         browser.sleep(3000)
     })
     browser.actions().dragAndDrop(element(by.xpath("//a[text()=' 5000 ']")) ,
     element(by.id("amt8"))).perform().then(function(){
         browser.sleep(3000)
     })
     element(by.id("bal3")).getText().then(function(total){
         console.log(total);
     })
     element(by.xpath("//a[text()='Perfect!']")).getText().then(function(result){
         console.log(result);
     })

    })
})