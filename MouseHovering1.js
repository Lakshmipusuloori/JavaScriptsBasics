


describe("validate Alert Handle", function () {
  it("validate Handle Alert with ok Button", function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
    browser.get("https://www.flipkart.com/");

element(by.xpath("//button[text()='✕']")).click();
browser.actions().mouseMove(element(by.xpath("//div[text() = 'Fashion']"))).perform().then(function(){
  browser.sleep(2000); 
})
 browser.actions().mouseMove(element(by.xpath("//a[text() = 'Women Ethnic']"))).perform().then(function(){
      browser.sleep(2000)
  }) 
  
    browser.actions().mouseMove(element(by.xpath("//a[text() = 'Women Sarees']"))).click().perform().then(function(){
    browser.sleep(2000)
          
}) 
  
   // console.log("Execute last")
     })
     
  });
  

