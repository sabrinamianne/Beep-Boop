# _Epicodus Code Review Intro to programming Week 2_

#### _Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with exceptions using HTML, CSS, BOOTSTRAP, JQUERY and JAVASCRIPT for review, 04.07.2019_

#### _By**Sabrina M**_

## Description

_We'll ask to the user their name and a number and the web application will return a range from 0 to the user inputted numberwith the following exceptions :

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."
These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

* The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."  _
A user should be able to enter a new number and see new results over and over again.


## Specifications



| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Do not allow the user to enter a string  | nklj!? |  |
| The web application takes the user number and will return a range of numbers from 0 to the user inputted number | 10 | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 |
| If a number into the range contains a 1, replace with "Beep!" | 5 | 0, "Beep!", 2, 3, 4, 5 |
| If a number into the range contains a 1 and 2,  replace with "Boop!"| 3 | 0, "Beep!", "Boop!", 3, 4, 5 |
| If a number into the range contains a 1 or 2 and 3,   replace with "I'm sorry, (user_name). I'm afraid I can't do that."| 3 | 0, "Beep!", "Boop!", "I'm sorry (user_name). I can't do that., 4, 5" |
| | | |



## Setup/Installation Requirements

* _clone this repository_
*_open the html file with a web browser_
*_This project is using Github pages_
*_Link of my project : https://sabrinamianne.github.io/Beep-Boop/
*_If you want to clone my project, use this link : https://github.com/sabrinamianne/Beep-Boop.git

## Known Bugs

_ No bugs related_

## Support and contact details

_Contact me by e-mail at the following address : sabrina.epicodus@gmail.com_

## Technologies Used

_HTML_
_Bootstrap_
_CSS_
_jQuery-3.3.1_
_Javascript_



### License

*This software is licenced under the MIT licence*

Copyright (c) 2019 ** Sabrina M_**
