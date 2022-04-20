/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    return Math.max(...accounts.map(customer => customer.reduce((accumulator, currentValue) =>
        accumulator + currentValue
    , 0)));
};