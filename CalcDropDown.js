const { element, browser } = require("protractor");

describe("validate Calculator", function () {
  function Calc(a, b, c) {
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);

    element.all(by.tagName("option")).each(function (item) {
      item.getAttribute("value").then(function (val) {
        if (val == c) {
          item.click();
        }
      });
    });
    element(by.id("gobutton")).click();
  }

  it("validate Calculator Button", function () {
    
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
    browser.get("https://juliemr.github.io/protractor-demo/");

    Calc(10, 20, "DIVISION");
    Calc(10, 50, "MULTIPLICATION");
    Calc(20,10, "MODULO");

    element.all(by.repeater("result in memory")).each(function (alldata) {
      alldata
        .element(by.css("td:nth-child(2)"))
        .getText()
        .then(function (ResultCol) {
          console.log(ResultCol);
        });
    });
   
  element.all(by.css("select[ng-model='operator']>option")).count().then(function(CountOptions){
    console.log(CountOptions);
})
element.all(by.tagName("option")).each(function (SelectDropdown) {
    SelectDropdown.getAttribute("value").then(function (selValue){
    //SelectDropdown.getAttribute("text").then(function (selValue){
console.log(selValue)
    })
  })  
 
  })
})

