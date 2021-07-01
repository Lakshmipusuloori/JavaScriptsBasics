describe("validate Drop Down", function () {
  it("validate Drop Down", function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
    browser.get("http://demo.guru99.com/test/newtours/register.php");

    element.all(by.tagName("option")).each(function (SelectDropdown) {
      //SelectDropdown.getAttribute("value").then(function (selValue)
      SelectDropdown.getAttribute("text").then(function (selValue) {
        if (selValue == "INDIA") {
          SelectDropdown.click();
          stop ;
          //console.log(selValue);
        } 
          console.log(selValue);
        
      
      });
    });
  });
});
