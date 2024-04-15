#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    //-------option-----
    let option = await inquirer.prompt([
        {
            type: "list",
            name: "user_option",
            message: "select in option",
            choices: ["add", "remove"],
        }
    ]);
    //----ADD----
    if (option.user_option === "add") {
        let ans = await inquirer.prompt([
            {
                type: "input",
                name: "user_ans",
                message: chalk.blue("write something to add in the task list"),
            }
        ]);
        if (ans.user_ans !== "") {
            todo_list.push(ans.user_ans);
            console.log(todo_list);
        }
        else {
            console.log(chalk.blue("please write something to add in the todo list"));
        }
    }
    //-------remove-------
    else if (option.user_option === "remove") {
        let removeChoice = await inquirer.prompt([
            {
                type: "list",
                name: "remove_item",
                message: chalk.blue(chalk.red("select item to remove")),
                choices: todo_list
            }
        ]);
        let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log("you remove :", removeChoice.remove_item);
            console.log(todo_list);
        }
    }
    //-------confirmation----
    let user_ans = await inquirer.prompt([
        {
            type: "confirm",
            name: "selection",
            message: chalk.bgBlueBright("do you want to continue"),
            default: true,
        }
    ]);
    if (user_ans.selection === false) {
        while_condition = false;
    }
}
console.log(chalk.green("Thank you for using todo list"));
