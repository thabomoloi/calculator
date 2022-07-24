# calculator

This is a simple calculator, and assignment from [The Odin Project](https://www.theodinproject.com/lessons/foundations-calculator).

[Click here for live demo](https://thabomcodes.github.io/calculator/)

## Features

- This calculator uses four basic math operations (addition, subtraction, division and multiplication) and supports negative numbers.
- Expressions are evaulated according to the BODMAS rule.
- To delete the character you have enter use the CE button.
- After pressing the equals (=) symbol you have to clear (AC button) the screen before you
  can evaluate other expressions.
- When there is an error, the screen colour will change to red for 1.5 seconds.
  Errors can occur when:
  - you have for example $5\times$ and you press either one of $-,\div,\$ or $\times$. For negative number us the $+/-$ button.
  - the second erro can occur when you have $5\times$ and you press the equals (=) symbol.

## What this project uses

- For displaying LaTeX math on the computer screen [MathJax](https://www.mathjax.org/) was used.
- This project uses the [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation) (e.g. `5 + 2` is written as `5 2 +`).
  - To write the basic expressions as reverse polish notation, the [Shunting Yard algorithm](https://en.wikipedia.org/wiki/Shunting_yard_algorithm) was used.
- Regular expressions were also used
- Stacks and queues implemetations are from [Programiz](https://www.programiz.com/)

## Possible features to implement

- The logarithm functions.
- Exponentiation.
- Factorial.
- The trigonometic functions aother functions.
- The values $\pi$ and $e$.
