# ajp2-411
Scripting - Project 2
http://127.0.0.1:57385/home.html

IT 411/Scripting for Interactive Systems
Sftwear Statement of Work (SOW)
Project 2
See D2L for due date.
Instructions
When submitting thes projects, zip all the folders for this project into a .zip file name project_2.zip Complete each of the following projects. Use as models the programs presented in class and available the D2L content area. 

1. Lucky number (1/3 of points)
Overview:
sftwear wants to offer their customers a T-Shirt with one of 10 predefined messages based on the customer's favorite number.

Requirements:
Build a web web page that will prompt the customer for their favorite number.
Based on their favorite number your program display one predetermined saying for their T-Shirt.
Name the folder holding the project files p2_1.
Helpful Hints:
Using the first version of the "April day" project, create a web project with a single page called index.html that prompts the user for their lucky number, which you may assume is a non-negative integer.
Look at JavaScript Decomped for information arrays
Include in the program an array of ten strings, each of which is a message.
The program will calculate the value of the user's lucky number using modulo 10 (week02 lecture example mod10example2.html) and display the corresponding message.
See example: Week02\April day\indexv1.html, Week02\mod10example.html, week02\mod10example1.html, week02\mod10example2.html.
Steps:
Declare our array with our list of messages
Prompt for input
Find the favorite numbers position in the Array by using modulo (%) division
Docwrite the output with the message
2. Lucky number v2 (1/3 of points)
Overview:
sftwear wants to offer their customers a T-Shirt with one of 10 predefined messages based on the customer's favorite number. This is a upgrade version of the first project that adds some data validation.

Requirements:
Modify the program you wrote above so that it checks that the user has entered a non-negative value (that is, the value must be greater than or equal to 0).
If not, it should pop up an alert with an error message, otherwise it should do the same as the previous program.
Helpful hints:
Copy the program in part 1 and rename to index2.html
Name the folder holding the project files p2_2.
See example: Week02\April day\indexv2.html
Steps:
Declare our array with our list of messages
Prompt for input
Check if the input is less than 0 and if so display error message
Else we find the favorite numbers position in the Array by using modulo (%) division
Docwrite the output with the message
3. Product (1/3 of points)
Overview
sftwear wants to offer their customers a T-Shirt that lists the product (that means multiplication) of their favorite numbers (as many as they want).

Requirements
Prompt the user for a sequence of values and then displays the product of the values
For example, if the values entered are 15, 20, and 25 the product displayed is 7500, which is 15 * 20 * 25.
Name the folder holding the project files p2_3.
Helpful hints
Using the first version of the "Scores" project, create a web project with a single page called index.html
Have it prompts the user for a sequence of values and then displays the product of the values.
Zero times any number is always zero. So if the number you are using for the total is zero the answer will ALWAYS be zero (try starting it at 1)
See example: Week02\Scores\indexv1.html
Steps:
Declare an empty array to hold values
Prompt for input in a loop and store value in an array
Loop over the array multiplying the numbers together to get a product (probably a for loop)
Docwrite the contents of the array
Docwrite the product we calculated
Martin Schray Last updated: 1/16/2016.
