import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrayassignment',
  templateUrl: './arrayassignment.component.html',
  styleUrls: ['./arrayassignment.component.css']
})
export class ArrayassignmentComponent implements OnInit {
  answer0: any = [];
  answer1: any = [];
  answer2: any = [];
  answer3: any = [];
  answer3b: any = [];
  transactions1: any = [];
  answer3c: any = [];
  answer4: any = [];
  answer5: any = [];
  answer5a: any = [];
  answer5b: any = [];
  answer6: any = [];
  answer6a: any = [];
  answer7: any = [];
  answer8: any = [];
  answer9: any = [];

  constructor() { }

  ngOnInit(): void {
    this.question0();
    //this.question1();
    //this.question2();
    this.question3();
    this.question3c();
    this.question4();
    this.question5(2000);
    this.question6();
    this.question8();
    this.question9();
  }

  //0 Reversing the Array 
  question0() {
    const marks = ['1', '2', '3']
    this.answer0 = marks.reverse();
  }

  //3. Create a new array of objects from the following data which only contains one property called 'name'where name = firstName + ' ' + lastName :
  // output - [{ name: "Puneet kukreja" }]
  question3() {
    let inputs = [
      {
        "firstName": "Coop",
        "lastName": "Lenahan"
      },
      {
        "firstName": "Lorenzo",
        "lastName": "Hulbert"
      },
      {
        "firstName": "Shoshanna",
        "lastName": "Elcoux"
      },
    ];
    this.answer3 = inputs;
    let newArray: any = [];

    inputs.forEach((input) => {
      // {
      //   "firstName": "Coop",
      //   "lastName": "Lenahan"
      // },
      let fullName = input.firstName + ' ' + input.lastName;
      // Shoshanna Elcoux 

      let jsonObject = {
        name: fullName
      }
      //  {name:"Coop Lenahan"}
      //{name:" Lorenzo Hulbert "}
      //{name:" Shoshanna Elcoux "}

      newArray.push(jsonObject);
      // [{name:"Coop Lenahan"}]
      // [{name:"Coop Lenahan"},{name:" Lorenzo Hulbert "},{name:" Shoshanna Elcoux "}]

      //or if u dnt want to make new varibale json object u can do as below as in {} json object brackets:
      //newArray.push({name: fullName});
    });
    console.log('answer 3b', newArray);
  }

  //3c Output print  "details": "Person 53 has deposit $290.20 on 7/27/2020"
  question3c() {
    let transactions = [
      {
        "id": 53,
        "type": "Deposit",
        "date": "7/27/2020",
        "amount": "$290.20"
      },
      {
        "id": 35,
        "type": "Deposit",
        "date": "12/26/2020",
        "amount": "$465.19"
      },
      {
        "id": 51,
        "type": "Deposit",
        "date": "2/4/2020",
        "amount": "$388.66"
      },
      {
        "id": 31,
        "type": "Deposit",
        "date": "11/3/2020",
        "amount": "$35.94"
      },
      {
        "id": 39,
        "type": "Withdrawal",
        "date": "2/17/2020",
        "amount": "$11.61"
      }
    ];
    this.transactions1 = transactions;
    let net: any = [];
    transactions.forEach((transaction) => {

      let details = "Deatils: " + "person " + transaction.id + " has " + transaction.type + " " + transaction.amount + " on " + transaction.date;

      let jsonObject = {
        Detail: details
      }
      net.push(jsonObject);
    });
    this.answer3c = net;
    console.log('answer 3c', this.answer3c);
  }

  // 4. Concatenate all the names into one string using inbuilt array function. Hint: array.reduce(). Extra: try solving it using loops too. Input:
  //Expected output:["Coop Lenahan", "Lorenzo Hulbert", "Shoshanna Elcoux"]

  question4() {
    let users = [
      {
        "firstName": "Coop",
        "lastName": "Lenahan"
      },
      {
        "firstName": "Lorenzo",
        "lastName": "Hulbert"
      },
      {
        "firstName": "Shoshanna",
        "lastName": "Elcoux"
      },
    ];

    users.forEach((user) => {
      let fullName = user.firstName + ' ' + user.lastName;
      this.answer4.push(fullName);

      console.log(this.answer4)
    });
  }

  //5. Write a function called getCarsMadeAfterYear(year) which will take year as a parameter and return all the cars
  //(objects) made after the value specified in the parameter year.
  // question5(year) {
  question5(year: number) {
    let carMade = [
      {
        carMake: 'Audi',
        modelYear: 2002,
      },
      {
        carMake: 'Jaguar',
        modelYear: 2008,
      },
      {
        carMake: 'Nissan',
        modelYear: 1991,
      },
      {
        carMake: 'Land Rover',
        modelYear: 1995,
      },
      {
        carMake: 'Infiniti',
        modelYear: 2009,
      },
    ];

    this.answer5a = carMade;
    console.log("answer 5a", this.answer5a)

    carMade.forEach((car) => {
      let carMakeYear = car.carMake + ' ' + car.modelYear;
      if (car.modelYear > year) {
        this.answer5b.push({ carMakeYear });
      }
      console.log("answer 5b", this.answer5b)
    });
    //we can use that method by removing the carmakeyear one as we can push direct in car and in html we can print by key value of carMAde

    // let newArray = carMade.filter((element) => element.modelYear > year);
    // this.answer5 = newArray
    // console.log("answer 5",this.answer5)

  }
  // Output: Transactions having type is 'Deposit'
  question6() {
    const transactions = [
      {
        id: 53,
        type: 'Deposit',
        date: '7/27/2020',
        amount: '$290.20',
      },
      {
        id: 35,
        type: 'Deposit',
        date: '12/26/2020',
        amount: '$465.19',
      },
      {
        id: 51,
        type: 'Deposit',
        date: '2/4/2020',
        amount: '$388.66',
      },
      {
        id: 31,
        type: 'Deposit',
        date: '11/3/2020',
        amount: '$35.94',
      },
      {
        id: 39,
        type: 'Withdrawal',
        date: '2/17/2020',
        amount: '$11.61',
      },
    ];

    // transactions.forEach((bank) => {
    //   let money = bank.id +" "+ bank.type + " " + bank.date + " "+ bank.amount ;
    //   if (bank.type === 'Deposit') {
    //     this.answer6.push({ money });
    //   }
    //     console.log("answer 6", this.answer6)
    // });

    // let money = transactions.filter((bank) => bank.type == 'Deposit');
    // this.answer6a = money
    // console.log("answer 6a",this.answer6a)


    // Question 7

    let money = transactions.filter((bank: any) => {
      const date = new Date(bank.date);  // 2009-11-10

      // Get the month as a number (0-11)
      const month = date.getMonth();
      const year = date.getFullYear();

      if (month === 1) {
        return bank;
      }

      // if (year == 2020) {
      //   return bank;
      // }


    });
    this.answer7 = money
    console.log("answer 7", this.answer7)
  }


  // Question 8 Input -> [1,2,3,4,5]
  //Output -> [2,4,6,8,10]
  question8() {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    var newArr = arr.map((el) => {
      return el * 2;
    });
    console.log("question8", newArr); //2,4,6,8,10,12,14
  }

  //9. Remove duplicates from the following array:
  question9() {
    let num = [2, 5, 3, 2, 9, 4, 5]; //uniq
    let sortedNum = [...new Set(num)];
    this.answer9 = sortedNum;
    console.log(sortedNum);
  }




  // //1-First Question - Reverse an array elements without using array.reverse() function.
  // question1() {
  //   let alpha = ['a', 'b', 'c', 'd'];
  //   for (let i = alpha.length - 1; i >= 0; i--) {
  //     this.answer1.push(alpha[i]);
  //   }
  //   console.log("Answer1", this.answer1);
  // }


  // //2. Second Question - Sort an array of objects by it's 'name' property:
  // question2() {
  //   let employee = [
  //     { name: 'Irvine' },
  //     { name: 'Malena' },
  //     { name: 'Anett' },
  //     { name: 'Evelina' },
  //     { name: 'Bree' },
  //     { name: 'Blanch' }
  //   ]

  //   employee.sort(function (a, b) {
  //     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //     if (nameA < nameB) {
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   this.answer2 = employee;
  //   console.log(employee)
  // }


}
