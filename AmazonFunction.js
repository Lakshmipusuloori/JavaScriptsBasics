const { element, browser } = require("protractor")

describe("Validate DropDown", function(){
    function result(c){
        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(val){
                if(val ==c){
                    item.click();
                    console.log(val);
                }
                
            })
        })
    }
        
           
  it("Validate Amazon DropDown", function(){
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
    browser.get("https://www.amazon.com/");
    console.log("Amazon Drop Down")
    result("search-alias=alexa-skills");
    result("search-alias=warehouse-deals")
    console.log("--------------------------")
    
  }) 
  it("Validate MercuryTours", function(){
      browser.ignoreSynchronization = true;
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(5000);
      browser.get("http://demo.guru99.com/test/newtours/register.php");
      console.log("--------------------------------")
      console.log("Mercury Tours Drop Down")
      console.log("-------------------------")
      result("ANGOLA");
      result("INDIA");
  });
           
});