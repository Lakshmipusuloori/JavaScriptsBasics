describe("validate Drop Down", function () {
  it("validate Drop Down", function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
    browser.get("http://amazon.com");

    element
      .all(by.xpath("//select[@id='searchDropdownBox']/option"))
      .each(function (SelectDropdown) {
        //SelectDropdown.getAttribute("value").then(function (selValue)
        SelectDropdown.getText().then(function (selValue) {
          //if (selValue == "search-alias=stripbooks")
          if (selValue == "Books") {
            SelectDropdown.click();
            //console.log(selValue);
          }
          console.log(selValue);
        });
      });
  });
});
