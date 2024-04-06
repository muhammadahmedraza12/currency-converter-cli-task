#!/usr/bin/env node
import inquirer from 'inquirer' 


const currency : any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_ans = await inquirer.prompt(
[
{
    name:'from',
    message:"Enter from currency",
    type: 'list',
    choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
},

{
    name:'to',
    message:"Enter to currency",
    type: 'list',
    choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
},

{
    name:'amount',
    message:"Enter your amount",
    type: 'number',
}

]
)

let userFromCurrency = user_ans.from
let userToCurrency = user_ans.to
let fromAmount = currency[userFromCurrency]
let toAmount = currency[userToCurrency]
let amount = user_ans.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount


console.log(convertedAmount)


