const { element } = require("protractor");



describe("validate login scinario", function () {
  it("valid username or password", function () {

  browser.ignoreSynchronization=true;
  browser.manage().window().maximize();
  browser.manage().timeouts().implicitlyWait(4000);
   browser.get("https://www.google.com");
   
   element(by.css("a[href='https://mail.google.com/mail/&ogbl']")).click();

    browser.sleep(5000)
  });
});
