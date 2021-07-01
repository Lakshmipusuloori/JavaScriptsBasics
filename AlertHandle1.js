

describe("validate Alert Handle", function () {
    it("validate Handle Alert with ok Button", function () {
  
    browser.ignoreSynchronization=true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
     browser.get("http://demo.guru99.com/test/delete_customer.php");
     element(by.xpath("//input[@name = 'submit']")).click();
      browser.switchTo().alert().getText().then(function(Alerttext){
          console.log(Alerttext)
      })
    
       browser.switchTo().alert().accept().then(function(){
         browser.sleep(4000);
     })
         browser.switchTo().alert().getText().then(function(Alerttext){
         console.log(Alerttext)
     });
            browser.switchTo().alert().accept().then(function(){
            browser.sleep(4000);
        
     });

     
    });
  });
  