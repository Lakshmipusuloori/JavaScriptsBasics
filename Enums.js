var Orders;
(function (Orders) {
    Orders[Orders["Chrome"] = 0] = "Chrome";
    Orders[Orders["Firefox"] = 1] = "Firefox";
    Orders[Orders["Edge"] = 1] = "Edge";
    Orders[Orders["Safari"] = 2] = "Safari";
})(Orders || (Orders = {}));
console.log(Orders);
