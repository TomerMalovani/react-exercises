// 1. Create an Account class, with a property: sum.
// The class will have 3 methods:
// deposit(value) - deposit money to the account. Increase the sum.
// withdraw(value) - withdraw money from the account. Decrease the sum.
// canWithdraw(value) - check if the amount can be withdrawn from the account without reaching a minus. Returns
// boolean.
// 2. create a lottery function: lottery(account)
// The lottery flow is as follows:
// ● check that the participant can withdraw 100 dollars. If not print a message and exit.
// ● draw a random number from 0-100.
// ● decide randomly if the participant won or lost.
// ● in case the participant won - deposit the sum + 30 to the account.
// ● in case the participant lost - withdraw the sum from the account.
// 3. create an account instance, and play the lottery 5 times.
// 4. print the final sum.

class Account {
    constructor(sum) {
        this.sum = sum;
    }

    deposit(value) {
        this.sum = this.sum + value;
        console.log("the amount now is " + this.sum);
        return this.sum;
    }

    withdraw(value) {
        if ((this.sum - value) >= 0) {
            this.sum = this.sum - value;
            return value;
        }
        else {
            console.log("u dont have enough money for that");
        }

    }

    canWithdraw(value) {
        if (this.sum > value) {
            return true;
        }
        else {
            return false;
        }
    }

    lottery() {
        if (this.canWithdraw(100)) {
            let rand = Math.floor(Math.random() * 100) + 1;
            console.log(rand);
            if (rand === 47) {
                console.log("you won");
                this.deposit(30)
                return this.sum;

            }
            else {
                console.log("you lost");
                this.withdraw(this.sum);
                return this.sum;
            }
        }
        else {
            console.log("ur so broke.. cya");

        }
    }


}

let Tomer_account = new Account(120);
console.log(Tomer_account.sum);
console.log(Tomer_account.deposit(10));
console.log(Tomer_account.withdraw(10));
console.log(Tomer_account.canWithdraw(35));
console.log(Tomer_account.lottery());


