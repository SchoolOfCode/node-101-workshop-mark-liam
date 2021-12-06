import myCollection from "./collection.js";
import chalk from "chalk";

function describeItem(item) {
  if (item.count === 1) {
    console.log(
      `I have ${
        chalk.yellow(1) + " " + chalk.cyan(item.name)
      }. Here's what I like about it: ${chalk.green(item.whatILike)}`
    );
  } else
    console.log(
      `I have ${chalk.yellow(item.count)} ${chalk.cyan(
        item.name + "s"
      )}. Here's what I like about them: ${chalk.green(item.whatILike)}.`
    );
}

// Message for Mark - I've changed it a bit so that it says "1" in yellow in the count === 1 messages rather than just "a" as that was coming back in blue by default which looked weird compared to the count > 1 messages.

describeItem(myCollection[0]);

function describeCollection(collection) {
  collection.forEach(describeItem);
}

describeCollection(myCollection);
