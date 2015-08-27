



$(document).ready(function () {
    $('#stripX').click(function () {
        var selectedItem = $('#stripXDropdown').val();
        $('#stripXresult').text("Given: " + selectedItem + ". Result: " + StripX(selectedItem));
    });


    $('#GotE').click(function()
    {
        var eWord = $('#GotEDropdown').val();
        $('#GotEresult').text("Given: " + eWord + ". Result: " + GotE(eWord));

    });

    $('#mod35').click(function () {
        var num = $('#mod35Dropdown').val();
        $('#mod35result').text("Given: " + num + ". Result: " + Mod35(parseInt(num)));

    });

    $('#sumArray').click(function () {
        var selectedNums = $('#sumArrayDropdown').val();
        var selectedArray = new Array();
        var selectedArray = selectedNums.split(",");
        $('#sumArrayResult').text("Given: " + selectedArray + ". Result: " + Sum(selectedArray));

    });

    $('#altPairs').click(function () {
        var word = $('#altPairsDropdown').val();
        $('#altPairsResult').text("Given: " + word + ". Result: " + AltPairs(word));

    });
});


function AltPairs(str) {
    var newStr ="";
    for (var i = 0; i < str.length; i += 4) {
        newStr += str.substring(i, Math.min(str.length, i + 2));          
    }
    return newStr;
} 
function Mod35(n) {
    if (n % 3 == 0) {
        if (n % 5 == 0) {
            return false;
        }
        return true;
    } else if (n % 5 == 0) {
        return true;
    }
}

function Sum(numbers) {
    count = 0;
    sum = 0;
    while (count < numbers.length) {
        sum += parseInt(numbers[count]);
        count++;
    }
    return sum;
}

function StripX(str) {
    var indexOfX = str.indexOf("x");
    var lastLetter = str.slice(-1)
    if (indexOfX == 0 && lastLetter == "x") {
        return str.slice(1, str.length - 1);
    } else if (indexOfX != 0 && lastLetter == "x") {
        return str.slice(0, str.length - 1);
    } else {
        return str.slice(1, str.length);
    }
}


function GotE(str) {
    var foundE = str.match(/e/g);
    if (foundE != null) {
        var n = foundE.length;
        if (n < 4 && n > 0) {
            return true;
        }
    } return false;
}


// ============================= LOOPS =============================

/* Loops #17:
Given an array of ints, return true if it contains a 2, 7, 1 pattern
 -- a value, followed by the value plus 5, followed by the value minus 1.
Pattern51({1, 2, 7, 1}) -> true
Pattern51({1, 2, 8, 1}) -> false
Pattern51({2, 7, 1}) -> true
function Pattern51(numbers) {
	var counter = 0;
	while(counter < numbers.length) {
		var plus5 = numbers[counter]+5;
		var plus1 = numbers[counter]-1;
		if(((numbers[counter+1]) == plus5) && (numbers[counter+2]==plus1)) 
		{
			return true;
		}
		counter++;
	}
return false;
}
console.log(Pattern51([1, 2, 7, 1]));
console.log(Pattern51([1, 2, 8, 1]));
console.log(Pattern51([2, 7, 1]));
console.log(Pattern51([5, 10, 4])); */

/* Loops #16:
Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples. 
NoTriples({1, 1, 2, 2, 1}) -> true
NoTriples({1, 1, 2, 2, 2, 1}) -> false
NoTriples({1, 1, 1, 2, 2, 2, 1}) -> false
function  NoTriples(numbers) {
	var counter = 0;
	while(counter < numbers.length) {
		if((numbers[counter]==numbers[counter+1]) && (numbers[counter+1]==numbers[counter+2]))
		{
			return false;
		} 
		counter++;
	}
	return true;
} 
console.log(NoTriples([1, 1, 2, 2, 1]));
console.log(NoTriples([1, 1, 2, 2, 2, 1]));
console.log(NoTriples([1, 1, 1, 2, 2, 2, 1])); */

/* Loops #15: 
Given an array of ints, return the number of times that two 6's are next to each other in the array. 
Also count instances where the second "6" is actually a 7. 
Array667({6, 6, 2}) -> 1
Array667({6, 6, 2, 6}) -> 1
Array667({6, 7, 2, 6}) -> 1 
function Array667(numbers) {
	var counter = 0;
	var found6 = 0;
	while(counter < numbers.length) {
		if((numbers[counter] == 6) && (numbers[counter+1]==6) || (numbers[counter+1]==7))
		{
			found6++;
		}
		counter ++;
	}
	return found6;
}
console.log(Array667([6, 6, 2]));
console.log(Array667([6, 6, 2, 6]));
console.log(Array667([6, 7, 2, 6]));
console.log(Array667([6, 7, 2, 6,6])); */

/* Loops #14:
Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, 
but the "a" can be any char. The "yak" strings will not overlap. 
DoNotYak("yakpak") -> "pak"
DoNotYak("pakyak") -> "pak"
DoNotYak("yak123ya") -> "123ya" 
function DoNotYak(str) {
	var result = "";
	var n = str.indexOf("yak");
	if(n > -1) {
		for(var i=0; i < str.length-3; i++) {		
		if((str[i] == "y") && (str[i+1] ="a") && (str[i+2] =="k")) {
			result += str.substring(i+3);
			break;
		} else {
			result += str[i];
		}
	}
}	
	return result;
} 
console.log(DoNotYak("yakpak"));
console.log(DoNotYak("pakyak"));
console.log(DoNotYak("yak123ya")); */

/* Loops #13:
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien". 
AltPairs("kitten") -> "kien"
AltPairs("Chocolate") -> "Chole"
AltPairs("CodingHorror") -> "Congrr"
function AltPairs(str) {
	var newStr ="";
	for (var i = 0; i < str.length; i += 4) {
		newStr += str.substring(i, Math.min(str.length, i + 2));          
	}
	return newStr;
} 
console.log(AltPairs("kitten"));
console.log(AltPairs("Chocolate"));
console.log(AltPairs("CodingHorror")); */

/* Loops #12:
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed. 
StringX("xxHxix") -> "xHix"
StringX("abxxxcd") -> "abcd"
StringX("xabxxxcdx") -> "xabcdx"
function StringX(str) {
	var firstX = str.indexOf("x");
	var lastLetter = str.slice(-1);
	var newStr = "";
	for(var i in str)
	{
		if(firstX == 0 && i == 0)
		{
			newStr += "x";
		}
		if((str[i] !="x"))
			{
				newStr += str[i];
			}
		if(lastLetter == "x" && i == str.length-1)
			{
				newStr += "x";
			}
	}
	return newStr;	
}
console.log(StringX("xxHxix"));
console.log(StringX("abxxxcd"));
console.log(StringX("xabxxxcdx")); */

/* Loops #11:
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. 
So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings. 
SubStringMatch("xxcaazz", "xxbaaz") -> 3
SubStringMatch("abc", "abc") -> 2
SubStringMatch("abc", "axc") -> 0 
function SubStringMatch(strA, strB) {
	var aLength = strA.length;
	var count = 0;
	for(var i = 0; i < aLength-1; i++)
	{
		if((strA[i] === strB[i]) && (strA[i+1] === strB[i+1]))
			{
				count++;
			}
		}
	return count;
}
console.log(SubStringMatch("xxcaazz", "xxbaaz"));
console.log(SubStringMatch("abc", "abc"));
console.log(SubStringMatch("abc", "axc")); */

/* Loops #10:
Given an array of ints, return true if .. 1, 2, 3, .. appears in the array somewhere. 
Array123({1, 1, 2, 3, 1}) -> true
Array123({1, 1, 2, 4, 1}) -> false
Array123({1, 1, 2, 1, 2, 3}) -> true
function Array123(numbers) {
	var found1 = numbers.indexOf(1);
	var count = found1;
	while (count < numbers.length)
	{
		var indexOf2 = count +  1;
		var indexOf3 = count + 2;
		if(numbers[indexOf2] == 2 && numbers[indexOf3] == 3)
		{
			return true;
		}
		count++;
	}
	return false;
}
console.log(Array123([1, 1, 2, 3, 1]));
console.log(Array123([1, 1, 2, 4, 1]));
console.log(Array123([1, 1, 2, 1, 2, 3])); */

/* Loops #9:
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4. 
ArrayFront9({1, 2, 9, 3, 4}) -> true
ArrayFront9({1, 2, 3, 4, 9}) -> false
ArrayFront9({1, 2, 3, 4, 5}) -> false 
function ArrayFront9(numbers) {
	var first4 = numbers.slice(0,4);
	for(var i in first4)
	{
		if(first4[i] == 9)
		{
			return true;
		}
	}
	return false;
}
console.log(ArrayFront9([1, 2, 9, 3, 4]));
console.log(ArrayFront9([1, 2, 3, 4, 9]));
console.log(ArrayFront9([1, 2, 3, 4, 5]));
console.log(ArrayFront9([1, 2]));
console.log(ArrayFront9([1, 9, 3])); */


/* Loops #8:
Given an array of ints, return the number of 9's in the array. 
Count9({1, 2, 9}) -> 1
Count9({1, 9, 9}) -> 2
Count9({1, 9, 9, 3, 9}) -> 3 
function Count9 (numbers) {
	var count = 0;
	var found9=0;
	
	while(count < numbers.length) {
		if(numbers[count] == 9)
		{
			found9++;
		}
		count++;
	}
	return found9;
}
console.log(Count9([1,2,9]));
console.log(Count9([1, 9, 9]));
console.log(Count9([1, 9, 9, 3, 9])); */

/* Loops #7:
Given a string, return the count of the number of times that a substring length 2 appears in the string 
and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring). 
CountLast2("hixxhi") -> 1
CountLast2("xaxxaxaxx") -> 1
CountLast2("axxxaaxx") -> 2 
function CountLast2(str) {
	var last2 = str.slice(-2);
	var count = 0;
	var found2 = 0;
	while(count < str.length-2){
		if(str.slice(count, count+2) == last2)
		{
			found2++;
		}
		count++;
	}
	return found2;
}
console.log(CountLast2("hixxhi"));
console.log(CountLast2("xaxxaxaxx"));
console.log(CountLast2("axxxaaxx")); */

/* Loops #6:
Given a non-empty string like "Code" return a string like "CCoCodCode".  (first char, first two, first 3, etc)
StringSplosion("Code") -> "CCoCodCode"
StringSplosion("abc") -> "aababc"
StringSplosion("ab") -> "aab"
function StringSplosion(str) {
	var count=0;
	var num = 0;
	var newStr ="";
	while(count < str.length+1){
		newStr +=str.slice(num,count);
		count++;
	}
	return newStr;
}
console.log(StringSplosion("Code"));
console.log(StringSplosion("abc"));
console.log(StringSplosion("ab")); */

/* Loops #5:
Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo". 
EveryOther("Hello") -> "Hlo"
EveryOther("Hi") -> "H"
EveryOther("Heeololeo") -> "Hello" 
function EveryOther (str){
	var count  = 0;
	var newStr="";
	while(count < str.length){
		newStr += str.slice(count, count+1);
		count +=2;
	}
	return newStr;
}
console.log(EveryOther("Hello"));
console.log(EveryOther("Hi"));
console.log(EveryOther("Heeololeo")); */


/* Loops #4:
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x". 
DoubleX("axxbb") -> true
DoubleX("axaxxax") -> false
DoubleX("xxxxx") -> true
function DoubleX(str) {
	var length = str.length;
	var firstX = str.indexOf("x");
		if(str.slice(firstX, firstX+1)=="x" && (str.slice(firstX+1,firstX+2) == "x"))
		{
			return true;
		}  else {
			return false;
		}
} 
console.log(DoubleX("axxbb"));
console.log(DoubleX("axaxxax"));
console.log(DoubleX("xxxxx"));  */

/* Loops #3: 
Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx". 
CountXX("abcxx") -> 1
CountXX("xxx") -> 2
CountXX("xxxx") -> 3 
function CountXX(str) {
	var length = str.length;
	var firstX = str.indexOf("x");
	var count = 0;
	var countX = 0;
	
	while(count < length){
		if(str.slice(firstX+count, firstX+count+1)=="x" && (str.slice(firstX+count+1,firstX+count+2) == "x"))
		{
			countX++;
		}
		count++;
	}
	return countX;
}
console.log(CountXX("abcxx"));
console.log(CountXX("xxx"));
console.log(CountXX("xxxx")); 
console.log(CountXX("aaxxxxaa")); */

/* Loops #2: 
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there 
if the string is less than length 3. Return n copies of the front; 
FrontTimes("Chocolate", 2) -> "ChoCho"
FrontTimes("Chocolate", 3) -> "ChoChoCho"
FrontTimes("Abc", 3) -> "AbcAbcAbc"
function FrontTimes(str, n) {
	if(str.length > 2 && n > 0) {
		var first3 = str.slice(0,3);
		var count = 0
		var newStr ="";
		while(count < n)
		{
			newStr += first3;
			count ++;
		}
		return newStr;
	}
}
console.log(FrontTimes("Chocolate", 2));
console.log(FrontTimes("Chocolate", 3));
console.log(FrontTimes("Abc", 3));
*/


/* Loops #1: 
Given a string and a non-negative int n, return a larger string that is n copies of the original string. 
StringTimes("Hi", 2) -> "HiHi"
StringTimes("Hi", 3) -> "HiHiHi"
StringTimes("Hi", 1) -> "Hi" 
function StringTimes(str, n) {
 if(n > 0) {
	 var newStr ="";
	 var count = 0;
	 while(count < n) {
		 newStr += str;
		 count ++;
	 }
	 return newStr;
 }
}
console.log(StringTimes("Hi", 2));
console.log(StringTimes("Hi", 3));
console.log(StringTimes("Hi", 1));  */
// ============================= LOGIC =============================
/* Logic #17:
Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, 
if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6. 
RollDice(2, 3, true) → 5
RollDice(3, 3, true) → 7
RollDice(3, 3, false) → 6
function RollDice(die1, die2, noDoubles) {
	if(!noDoubles) {
		return die1+die2;
	} else if(noDoubles) {
		if(die1==die2) {
			if(die1 > 5) {
				return die1 + 1;
			}
			return die1+die2 + 1;
		}
		return die1+die2;
	}	
}
console.log(RollDice(2, 3, true));
console.log(RollDice(3, 3, true));
console.log(RollDice(3, 3, false)); */

/* Logic #16:
Given three ints, a b c, return true if two or more of them have the same rightmost digit. The ints are non-negative. 
LastDigit(23, 19, 13) → true
LastDigit(23, 19, 12) → false
LastDigit(23, 19, 3) → true 
function LastDigit(a, b, c) { 
var diffAB = a-b;
var diffBC = b-c;
var diffAC=a-c;
if(diffAB % 10 == 0 || diffAC % 10 == 0 || diffBC % 10 == 00) 
{
	return true;
} 
return false;
} 
console.log(LastDigit(23,19,13));
console.log(LastDigit(23,19,12));
console.log(LastDigit(23,19,3)); */

/* Logic #15:
Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. 
However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5. 
InOrderEqual(2, 5, 11, false) → true
InOrderEqual(5, 7, 6, false) → false
InOrderEqual(5, 5, 7, true) → true 
function InOrderEqual(a, b, c, equalOk) {
  if(a < b && b < c && !equalOk) {
	  return true;
  } else if(equalOk) {
	  if(a == b || b == c) {
		  return true;
	  }
  }
  return false;
}
console.log(InOrderEqual(2, 5, 11, false));
console.log(InOrderEqual(5, 7, 6, false));
console.log(InOrderEqual(5, 5, 7, true)); */

/* Logic #14:
Given three ints, a b c, return true if b is greater than a, and c is greater than b. 
However, with the exception that if "bOk" is true, b does not need to be greater than a. 
AreInOrder(1, 2, 4, false) → true
AreInOrder(1, 2, 1, false) → false
AreInOrder(1, 1, 2, true) → true 
function AreInOrder(a, b, c, bOk) {
	if(bOk) {
		if(c > b) {
			return true;
		}
	} else if(b > a && c > b) {
		return true;
	}
  return false;
 }
console.log(AreInOrder(1, 2, 4, false));
console.log(AreInOrder(1, 2, 1, false));
console.log(AreInOrder(1, 1, 2, true)); */


/* Logic #13:
Given three ints, a b c, return true if it is possible to add two of the ints to get the third. 
TwoIsOne(1, 2, 3) → true
TwoIsOne(3, 1, 2) → true
TwoIsOne(3, 2, 2) → false
function TwoIsOne(a,b,c) {
  if(a+b==c || b+c ==a || a+c==b) {
	  return true;
  }
  return false;
}
console.log(TwoIsOne(1, 2, 3));
console.log(TwoIsOne(3,1,2));
console.log(TwoIsOne(3, 2, 2)); */

/* Logic #12:
Your cell phone rings. Return true if you should answer it. Normally you answer, 
except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer. 
AnswerCell(false, false, false) → true
AnswerCell(false, false, true) → false
AnswerCell(true, false, false) → false
function AnswerCell(isMorning, isMom, isAsleep) {
  if(isAsleep) {
	  return false;
  } 
  if(isMom) {
	  return true;
  } 
  if(!isMorning) {
	  return true;
  } else { 
	return false;
  }
}
console.log(AnswerCell(false, false, false));
console.log(AnswerCell(false, false, true));
console.log(AnswerCell(true, false, false)); */



/* Logic #11:
Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator
Mod35(3) → true
Mod35(10) → true
Mod35(15) → false 
function Mod35(n) {
	if(n % 3 == 0) {
		if(n % 5 == 0)
		{
			return false;
		}
		return true;
	} else if (n % 5 == 0) {
		return true;
	}
}
console.log(Mod35(3));
console.log(Mod35(10));
console.log(Mod35(15)); */

/* Logic #10:
Return true if the given non-negative number is 1 or 2 more than a multiple of 20. See also: Introduction to Mod 
Mod20(20) → false
Mod20(21) → true
Mod20(22) → true 
function Mod20(n) {
  if((n > 19) && (n % 20 == 1 || n % 20 == 2)) {
	  return true;
  }
  return false;
}
console.log(Mod20(20));
console.log(Mod20(21));
console.log(Mod20(22));
console.log(Mod20(2)); */

/* Logic #9:
We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. 
Return true if the given non-negative number is special. Use the % "mod" operator
SpecialEleven(22) → true
SpecialEleven(23) → true
SpecialEleven(24) → false 
function SpecialEleven(n) {
	if(n % 11 == 0 || n % 11 == 1) {
		return true;
	}
	return false;
}
console.log(SpecialEleven(22));
console.log(SpecialEleven(23));
console.log(SpecialEleven(24)); */

/* Logic #8:
Given a number n, return true if n is in the range 1..10, inclusive. 
Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10. 
InRange(5, false) → true
InRange(11, false) → false
InRange(11, true) → true 
function InRange(n, outsideMode) {
	if(!outsideMode) {
		if(n > 0 && n < 11) {
			return true;
		}
		return false;
	} else if(n < 2 || n > 9) {
		return true;
	}
	return false;
}
console.log(InRange(5, false));
console.log(InRange(11, false));
console.log(InRange(11, true));
console.log(InRange(5, true)); */


/* Logic #7:
The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6.
LoveSix(6, 4) → true
LoveSix(4, 5) → false
LoveSix(1, 5) → true 
function LoveSix(a, b) {
  var sum = a+b;
  var diff = Math.abs(a-b);
  if(a == 6 || b== 6) {
	  return true;
  } else if(diff == 6 || sum == 6) {
	  return true;
  }
 return false;
}
console.log(LoveSix(6, 4));
console.log(LoveSix(4, 5));
console.log(LoveSix(1, 5));
console.log(LoveSix(3, 9)); 
console.log(LoveSix(15, 9)); */

/* Logic #6:
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, 
return a string of the form "7:00" indicating when the alarm clock should ring. 
Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". 
Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off". 
AlarmClock(1, false) → "7:00"
AlarmClock(5, false) → "7:00"
AlarmClock(0, false) → "10:00"
function AlarmClock(day, vacation) {
	if(day > 0 && day < 6) {
		if(!vacation) {
			return "7:00";
		}
		return "10:00";
	} else if(day == 0 || day == 6) {
		if(!vacation) {
			return "10:00";
		}
		return "off";
	}
} 
console.log(AlarmClock(1, false));
console.log(AlarmClock(5, false));
console.log(AlarmClock(0, false));
console.log(AlarmClock(6, true)); */


/* Logic #5: 
Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive are forbidden, so in that case just return 20. 
SkipSum(3, 4) → 7
SkipSum(9, 4) → 20
SkipSum(10, 11) → 21
function SkipSum(a, b) {
	if(a+b > 10 && a+b < 20)
	{
		return 20;
	}
  return a+b;
} 
console.log(SkipSum(3, 4));
console.log(SkipSum(9, 4));
console.log(SkipSum(10, 11)); */

/* Logic #4: 
You are driving a little too fast, and a police officer stops you. Write code to compute the result, 
encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. 
If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. 
If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases. 
CaughtSpeeding(60, false) → 0
CaughtSpeeding(65, false) → 1
CaughtSpeeding(65, true) → 0
function CaughtSpeeding(speed, isBirthday) {
	if(speed < 66) {
		if(isBirthday || speed < 61) {
			return 0;
		}
		return 1;
	} 
	if(speed > 84) {
		if(isBirthday || speed < 81) {
			return 1;
		} 
		return 2;
	} 
} 
console.log(CaughtSpeeding(60, false));
console.log(CaughtSpeeding(65, false));
console.log(CaughtSpeeding(60, true));
console.log(CaughtSpeeding(95, true));
console.log(CaughtSpeeding(85, false)); */


/* Logic #3: 
The children in Cleveland spend most of the day playing outside. In particular, they play if the temperature is between 60 and 90 (inclusive). 
Unless it is summer, then the upper limit is 100 instead of 90. 
Given an int temperature and a bool isSummer, return true if the children play and false otherwise. 
PlayOutside(70, false) → true
PlayOutside(95, false) → false
PlayOutside(95, true) → true
function PlayOutside(temp, isSummer) {
	if(temp > 59 && temp < 100) {
		if(!isSummer  && temp < 91) {
			return true;
		} else if(isSummer){
			return true;
		}
	}
	return false;
}
console.log(PlayOutside(70, false));
console.log(PlayOutside(95, false));
console.log(PlayOutside(95, true)); */

/* Logic #2: 
You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, 
in the range 0..10, and "date" is the stylishness of your date's clothes. 
The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. 
If either of you is very stylish, 8 or more, then the result is 2 (yes). 
With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe). 
CanHazTable(5, 10) → 2
CanHazTable(5, 2) → 0
CanHazTable(5, 5) → 1
function CanHazTable(yourStyle, dateStyle) {
  if(yourStyle > 7 || dateStyle > 7) {
	  return 2;
  } else if(yourStyle < 3 || dateStyle < 3) {
	  return 0;
  } else {
	  return 1;
  }
}
console.log(CanHazTable(5, 10));
console.log(CanHazTable(5, 2));
console.log(CanHazTable(5, 5)); */

/* Logic #1: 
When squirrels get together for a party, they like to have cigars. 
A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. 
Unless it is the weekend, in which case there is no upper bound on the number of cigars. 
Return true if the party with the given values is successful, or false otherwise. 
GreatParty(30, false) → false
GreatParty(50, false) → true
GreatParty(70, true) → true
function GreatParty(cigars, isWeekend) {
  if(cigars > 39) {
	  if(isWeekend) {
		  return true;
	  } else if(cigars < 61) {
		  return true;
	  }
  }  else {
	  return false;
  }
}
console.log(GreatParty(30, false));
console.log(GreatParty(50, false));
console.log(GreatParty(70, true)); */


// ============================= ARRAYS =============================

/* Arrays #15:
Given 2 int arrays, a and b, return a new array length 2 containing,  as much as will fit,
 the elements from a followed by the elements from b. The arrays may be any length, including 0, 
 but there will be 2 or more elements available between the 2 arrays. 
Make2({4, 5}, {1, 2, 3}) -> {4, 5}
Make2({4}, {1, 2, 3}) -> {4, 1}
Make2({}, {1, 2}) -> {1, 2}
function make2(a,b) {
	var lengthA = a.length;
	var lengthB = b.length;
	if(lengthA > 1) {
		return a.slice(0,2);
	} else if (lengthA == 1) {
		var newArray= [a[0], b[0]];
		return newArray;
	} else{
		return b.slice(0,2);
	}
}
console.log(make2([4, 5], [1, 2, 3]));
console.log(make2([4], [1, 2, 3]));
console.log(make2([], [1, 2])); */

/* Arrays #14:
We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. 
Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array. 
Unlucky1({1, 3, 4, 5}) -> true
Unlucky1({2, 1, 3, 4, 5}) -> true
Unlucky1({1, 1, 1}) -> false 
function Unlucky1(numbers) {
	for(var i=0; i < numbers.length; i++) {
		if(numbers[i]==1 && numbers[i+1]==3) {
			if(i < 2 || i == numbers.length-2) {
				return true;
			}
		}
	}
	return false;
}
console.log(Unlucky1([1, 3, 4, 5]));
console.log(Unlucky1([2,1, 3, 4, 5]));
console.log(Unlucky1([1,1,1]));
console.log(Unlucky1([1,6,7,8,1,3]));  */

/* Arrays #13:
Given an int array length 3, if there is a 2 in the array immediately followed by a 3, 
set the 3 element to 0. Return the changed array. 
Fix23({1, 2, 3}) ->{1, 2, 0}
Fix23({2, 3, 5}) -> {2, 0, 5}
Fix23({1, 2, 1}) -> {1, 2, 1} 
function Fix23(numbers) {
	for(var i=0;i<numbers.length;i++) {
		if(numbers[i]==2 && numbers[i+1]==3) {
			numbers.splice(i+1,1,0);
		}
	}
	return numbers;
}
console.log(Fix23([1, 2, 3]));
console.log(Fix23([2, 3,5]));
console.log(Fix23([1,2,1])); */

/* Arrays #12:
Given an int array, return true if the array contains 2 twice, or 3 twice. 
Double23({2, 2, 3}) -> true
Double23({3, 4, 5, 3}) -> true
Double23({2, 3, 2, 2}) -> false 
function Double23(numbers) {
	var found2=0;
	var found3=0;
	
	for(var i =0;i < numbers.length; i++) {
		if(numbers[i]==2) {
			found2++;
		}
		if(numbers[i]==3) {
			found3++;
		}
	}
	if(found2 == 2 || found3 ==2) {
		return true;
	}
	return false;
}
console.log(Double23([2, 2, 3]));
console.log(Double23([3,4,5,3]));
console.log(Double23([2,3,2,2])); */

/* Arrays #11:
Given an int array, return a new array with double the length where its last 
element is the same as the original array, and all the other elements are 0. 
The original array will be length 1 or more. Note: by default, a new int array contains all 0's. 
KeepLast({4, 5, 6}) -> {0, 0, 0, 0, 0, 6}
KeepLast({1, 2}) -> {0, 0, 0, 2}
KeepLast({3}) -> {0, 3} 
function KeepLast(numbers) {
	var n = numbers.length * 2;
	var lastNum = numbers.slice(-1);
	var newArray = [];
	for(var i=0;i < n-1; i++) {
		newArray.push(0);
	}
	newArray.push(lastNum[0]);
	return newArray;
}
console.log(KeepLast([4, 5, 6]));
console.log(KeepLast([1,2]));
console.log(KeepLast([3])); */

/* Arrays #10:
Given an int array , return true if it contains an even number (HINT: Use Mod (%)). 
HasEven({2, 5}) -> true
HasEven({4, 3}) -> true
HasEven({7, 5}) -> false 
function HasEven(numbers) {
	var foundEven = 0;
	for(var n in numbers) {
		if(numbers[n] % 2 ==0) {
			foundEven++;
		}
	}
	if(foundEven > 0) {
		return true;
	}
	return false;
}
console.log(HasEven([2, 5]));
console.log(HasEven([4, 3]));
console.log(HasEven([7, 5])); */

/* Arrays #9:
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements. 
GetMiddle({1, 2, 3}, {4, 5, 6}) -> {2, 5}
GetMiddle({7, 7, 7}, {3, 8, 0}) -> {7, 8}
GetMiddle({5, 2, 9}, {1, 4, 5}) -> {2, 4} 
function GetMiddle(a, b) {
	var midA = a[1];
	var midB = b[1]; 
	var newArray = [midA,midB];
	return newArray;
} 
console.log(GetMiddle([1, 2, 3], [4, 5, 6]));
console.log(GetMiddle([7,7,7], [3,8,0]));
console.log(GetMiddle([5,2,9], [1,4,5])); */

/* Arrays #8: 
Given an array of ints, figure out which is larger between the first 
and last elements in the array, and set all the other elements to be that value. Return the changed array. 
HigherWins({1, 2, 3}) -> {3, 3, 3}
HigherWins({11, 5, 9}) -> {11, 11, 11}
HigherWins({2, 11, 3}) -> {3, 3, 3} 
function HigherWins(numbers) {
	var first = numbers.slice(0,1);
	var last = numbers.slice(-1); 
	var result = last;
	var newArray = [];
	if(first[0] > last[0]) {
		result = first; 
	} 
	for(var i = 0; i < numbers.length; i++) {
		newArray.push(result[0]);
	}
	return newArray;
}
console.log(HigherWins([1, 2, 3]));
console.log(HigherWins([11, 5, 9]));
console.log(HigherWins([2,11,3])); */

/* Arrays #7: 
Given an array of ints length 3, return a new array with the elements in reverse order, 
so for example {1, 2, 3} becomes {3, 2, 1}. 
function Reverse(numbers) {
	//return numbers.reverse();
	var newArray = [];
	for(var i = numbers.length-1; i > -1;i--) {
		newArray.push(numbers[i]);
	}
	return newArray;
}
console.log(Reverse([1,2,3]));  */


/* Arrays #6: 
Given an array of ints, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}. 
RotateLeft({1, 2, 3}) -> {2, 3, 1}
RotateLeft({5, 11, 9}) -> {11, 9, 5}
RotateLeft({7, 0, 0}) -> {0, 0, 7} 
function RotateLeft(numbers) {
	//return numbers.reverse();
	var newArray = []
	for(var i=numbers.length-1; i>-1; i--) {
		newArray.push(numbers[i])
	}
	return newArray;
}
console.log(RotateLeft([1, 2, 3]));
console.log(RotateLeft([5,11, 9]));
console.log(RotateLeft([7,0,0])); */

/* Arrays #5
Given an array of ints, return the sum of all the elements.
Sum({1, 2, 3}) -> 6
Sum({5, 11, 2}) -> 18
Sum({7, 0, 0}) -> 7 
function Sum(numbers) {
	count = 0;
	sum = 0;
	while(count < numbers.length) {
		sum += numbers[count];
		count++;
	}
	return sum;
}
console.log(Sum([1, 2, 3]));
console.log(Sum([5,11,2]));
console.log(Sum([7,0,0])); */

/* Arrays #4:
Given 2 arrays of ints, a and b, return true if 
they have the same first element or they have the same last element. Both arrays will be length 1 or more. 
CommonEnd({1, 2, 3}, {7, 3}) -> true
CommonEnd({1, 2, 3}, {7, 3, 2}) -> false
CommonEnd({1, 2, 3}, {1, 3}) -> true 
function commonEnd(a, b) {
	var lastB = b.slice(-1);
	var lastA = a.slice(-1);
  if(a[0]==b[0] || lastA[0]==lastB[0]) {
	  return true;
  }
  return false;
}
console.log(commonEnd([1, 2, 3], [7, 3]));
console.log(commonEnd([1, 2, 3], [7, 3,2]));
console.log(commonEnd([1, 2, 3], [1, 3])); */

/* Arrays #3:
Return an int array length n containing the first n digits of pi.
MakePi(3) -> {3, 1, 4} 
function MakePi(n) {
	var pi = [3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3];
	 return pi.slice(0,n);
}
console.log(MakePi(3)); */

/* Arrays #2:
Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal. 
SameFirstLast({1, 2, 3}) -> false
SameFirstLast({1, 2, 3, 1}) -> true
SameFirstLast({1, 2, 1}) -> true 
function SameFirstLast(numbers) {
	var n = numbers.length-1;
	if(numbers[0] == numbers[n] && n > 0) {
		return true;
	}
	return false;
}
console.log(SameFirstLast([1, 2, 3]));
console.log(SameFirstLast([1, 2, 3, 1]));
console.log(SameFirstLast([1, 2, 1])); 
console.log(SameFirstLast([1]));  */


/* Arrays #1:
Given an array of ints, return true if 6 appears as 
either the first or last element in the array. The array will be length 1 or more. 
FirstLast6({1, 2, 6}) -> true
FirstLast6({6, 1, 2, 3}) -> true
FirstLast6({13, 6, 1, 2, 3}) -> false 
function FirstLast6(numbers) {
	var found6 =numbers.indexOf(6);
	if(found6 == 0 || found6 == numbers.length -1) {
		return true;
	}
	return false;
}
console.log(FirstLast6([1, 2, 6]));
console.log(FirstLast6([6, 1, 2, 3]));
console.log(FirstLast6([13, 6, 1, 2, 3])); */
// ============================= CONDITIONALS =============================
/* Conditionals #27:
Given a non-empty string and an int N, return the string made starting with char 0, 
and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more. 
EveryNth("Miracle", 2) -> "Mrce"
EveryNth("abcdefg", 2) -> "aceg"
EveryNth("abcdefg", 3) -> "adg" 
function EveryNth(str, n) {
	var newStr = str.slice(0,1);
	for(var i=n; i < str.length; i+=n) {
		newStr += str[i];
	}
	return newStr;
}
console.log(EveryNth("Miracle", 2));
console.log(EveryNth("abcdefg", 2));
console.log(EveryNth("abcdefg", 3)); */

/* Conditionals #26:
Given a string, return a new string where the last 3 chars are now in upper case. 
If the string has less than 3 chars, uppercase whatever is there. 
EndUp("Hello") -> "HeLLO"
EndUp("hi there") -> "hi thERE"
EndUp("hi") -> "HI" 
function EndUp(str) {
	if(str.length < 4) {
		return str.toUpperCase();
	} else {
		return str.slice(0, str.length-3)+str.slice(-3).toUpperCase();
	}
}
console.log(EndUp("Hello"));
console.log(EndUp("hi there"));
console.log(EndUp("hi")); */

/* Conditionals #25:
Return true if the given string contains between 1 and 3 'e' chars. 
GotE("Hello") -> true
GotE("Heelle") -> true
GotE("Heelele") -> false  
function GotE(str) {
	var foundE = str.match(/e/g);
	if(foundE != null) {
	var n = foundE.length;
		if(n < 4 && n > 0) {
			return true;
		}
	} return false;
} 
console.log(GotE("Hello"));
console.log(GotE("Heelle"));
console.log(GotE("Heelele"));
console.log(GotE("no")); */


/* Conditionals #24: 
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. 
Closer(8, 13) -> 8
Closer(13, 8) -> 8
Closer(13, 7) -> 0 
function Closer(a, b) {
	var from10A = Math.abs((a+(-10)));
	var from10B = Math.abs((b+(-10)));
	if(from10A < from10B) {
		return a;
	} else if(from10A > from10B) {
		return b;
	} return 0;
}
console.log(Closer(8, 13));
console.log(Closer(13,8));
console.log(Closer(13,7)); */

/* Conditionals #23: 
Given three int values, a b c, return the largest. 
Max(1, 2, 3) -> 3
Max(1, 3, 2) -> 3
Max(3, 2, 1) -> 3 
function Max(a, b, c) {
	if(a < b) {
		if(b < c) {
			return c;
		}
		return b;
	} else if(a > b && c < a)
	{
		return a;
	} return c;
}
console.log(Max(1, 2, 3));
console.log(Max(1, 3, 2)); 
console.log(Max(3, 2, 1)); 
console.log(Max(3, 2, 6));
console.log(Max(3, 7, 6)); */


/* Conditionals #22:
Given a string, return a string made of the first 2 chars (if present), 
however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz". 
StartOz("ozymandias") -> "oz"
StartOz("bzoo") -> "z"
StartOz("oxx") -> "o" 
function StartOz(str) {
	var secChar = str.slice(1,2);
	var isOz = str.slice(0,2);
	if(str.charAt(0)=="o" || secChar=="z")
	{
		if(isOz=="oz")
		{
			return isOz;
		} else if(secChar=="z")
		{
			return secChar;
		}
		return str.slice(0,1);
	}
}
console.log(StartOz("ozymandias"));
console.log(StartOz("bzoo"));
console.log(StartOz("oxx")); */

/* Conditionals #21:
Return true if the given string begins with "*ix", the '*' can be anything, so "pix", "9ix" .. all count. 
IxStart("mix snacks") -> true
IxStart("pix snacks") -> true
IxStart("piz snacks") -> false 
function IxStart(str) {
	var ix = str.slice(1,3);
	if(ix=="ix") {
		return true;
	}
	return false;
}
console.log(IxStart("mix snacks"));
console.log(IxStart("pix snacks"));
console.log(IxStart("piz snacks")); */

/* Conditionals #20:
Given a string, if the string "del" appears starting at index 1, 
return a string where that "del" has been deleted. Otherwise, return the string unchanged. 
RemoveDel("adelbc") -> "abc"
RemoveDel("adelHello") -> "aHello"
RemoveDel("adedbc") -> "adedbc" 
function RemoveDel(str) {
	var delAt1 = str.slice(1,4);
	if(delAt1 == "del") {
		var newStr =  str.replace(delAt1,"");
		return newStr;
	}
	return str;
}
console.log(RemoveDel("adelbc"));
console.log(RemoveDel("adelHello"));
console.log(RemoveDel("adedbc")); */



/* Conditionals #19:
We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
Given 2 int values, return true if one or the other is teen, but not both. 
SoAlone(13, 99) -> true
SoAlone(21, 19) -> true
SoAlone(13, 13) -> false 
function SoAlone(a, b) {
	if((a < 20 && a > 12) && (b < 20 && b > 12)) {
		return false;
	} else if((a < 20 && a > 12) || (b < 20 && b > 12)) {
		return true;
	}
}
console.log(SoAlone(13, 99));
console.log(SoAlone(21, 19));
console.log(SoAlone(13, 13)); */

/* Conditionals #18:
We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen. 
HasTeen(13, 20, 10) -> true
HasTeen(20, 19, 10) -> true
HasTeen(20, 10, 12) -> false 
function HasTeen(a, b, c) {
	if((a < 20 && a > 12) || (b < 20 && b > 12) || (c < 20 && c > 12)) {
		return true;
	}
return false;
}
console.log(HasTeen(13, 20, 10));
console.log(HasTeen(20, 19, 10));
console.log(HasTeen(20, 10, 12)); */

/* Conditionals #17:
Given 2 int values, return true if either of them is in the range 10..20 inclusive. 
Between10and20(12, 99) -> true
Between10and20(21, 12) -> true
Between10and20(8, 99) -> false 
function Between10and20(a, b) {
	if((a < 21 && a > 9) || (b < 21 && b > 9)) {
		return true;
	}
	return false;
}
console.log(Between10and20(12, 99));
console.log(Between10and20(21, 12));
console.log(Between10and20(8, 99)); */

/* Conditionals #16:
Given two temperatures, return true if one is less than 0 and the other is greater than 100. 
IcyHot(120, -1) -> true
IcyHot(-1, 120) -> true
IcyHot(2, 120) -> false 
function IcyHot(temp1, temp2) {
	if(temp1 < 0 && temp2 > 100) {
		return true;
	} else if(temp2 < 0 && temp1 > 100) {
		return true;
	}
	return false;
}
console.log(IcyHot(120, -1));
console.log(IcyHot(-1, 120));
console.log(IcyHot(2, 120)); */

/* Conditionals #15:
Given a string, return true if the string starts with "hi" and false otherwise. 
StartHi("hi there") -> true
StartHi("hi") -> true
StartHi("high up") -> false 
function StartHi(str) {
	if(str.slice(0,2)=="hi")
	{
		if(str.length < 3 || str.slice(2,3)==" ")
		{
			return true;
		}
	}
		return false;
}
console.log(StartHi("hi there"));
console.log(StartHi("hi"));
console.log(StartHi("high up")); */

/* Conditionals #14:
Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator
Multiple3or5(3) -> true
Multiple3or5(10) -> true
Multiple3or5(8) -> false 
function Multiple3or5(number) {
	if(number % 3 == 0 || number % 5 == 0)
	{
		return true;
	}
	return false;
}
console.log(Multiple3or5(3));
console.log(Multiple3or5(10));
console.log(Multiple3or5(8)); */


/* Conditionals #13:
Given a string, take the last char and return a new string with the last char added at the front and back, 
so "cat" yields "tcatt". The original string will be length 1 or more. 
BackAround("cat") -> "tcatt"
BackAround("Hello") -> "oHelloo"
BackAround("a") -> "aaa" 
function BackAround(str) {
	var lastChar = str.slice(-1);
	var newStr = lastChar + str + lastChar;
	return newStr;
}
console.log(BackAround("cat"));
console.log(BackAround("Hello"));
console.log(BackAround("a")); */

/* Conditionals #12:
Given a string, we'll say that the front is the first 3 chars of the string. 
If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front. 
Front3("Microsoft") -> "MicMicMic"
Front3("Chocolate") -> "ChoChoCho"
Front3("at") -> "atatat"
function Front3(str) {
	if(str.length < 3)
	{
		return str+str+str;
	}
	var newStr = str.slice(0,3);
	newStr +=newStr + newStr;
	return newStr;
}
console.log(Front3("Microsoft"));
console.log(Front3("Chocolate"));
console.log(Front3("at")); */

/* Conditionals #11:
Given a string, return a new string where the first and last chars have been exchanged. 
FrontBack("code") -> "eodc"
FrontBack("a") -> "a"
FrontBack("ab") -> "ba" 
function FrontBack(str) {
	if(str.length > 1) {
		var newStr = str.slice(-1);
		newStr += str.slice(1,str.length-1);
		newStr += str.slice(0,1);
		return newStr;
		}
	return str;
}
console.log(FrontBack("code"));
console.log(FrontBack("a"));
console.log(FrontBack("ab")); */


/* Conditionals #10:
Given a non-empty string and an int n, return a new string where the char at index n has been removed. 
The value of n will be a valid index of a char in the original string (Don't check for bad index). 
MissingChar("kitten", 1) -> "ktten"
MissingChar("kitten", 0) -> "itten"
MissingChar("kitten", 4) -> "kittn" 
function MissingChar(str, n) {
	var newStr = str.slice(0,n);
	newStr += str.slice(n+1,str.length);
	return newStr;
}
console.log(MissingChar("kitten", 1));
console.log(MissingChar("kitten", 0));
console.log(MissingChar("kitten", 4)); */

/* Conditionals #9:
Given a string, return a new string where "not " has been added to the front. 
However, if the string already begins with "not", return the string unchanged. Hint: Look up how to use "SubString" in c#
NotString("candy") -> "not candy"
NotString("x") -> "not x"
NotString("not bad") -> "not bad" 
function NotString(str) {
	var first3 = str.substring(0,3);
	if(first3 != "not") {
		return "not " + str;
	}
	return str;
}
console.log(NotString("candy"));
console.log(NotString("x"));
console.log(NotString("not bad")); */

/* Conditionals #8: 
Given two int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, 
then return true only if both are negative. 
PosNeg(1, -1, false) -> true
PosNeg(-1, 1, false) -> true 
PosNeg(-4, -5, true) -> true 
function PosNeg(a, b, negative) {
	if(!negative) {
		if(a < 0 || b < 0) {
			return true;
		}
		return false;
	} else {
		if(a < 0 && b < 0) {
			return true;
		}
		return false;
	}
}
console.log(PosNeg(1, -1, false));
console.log(PosNeg(-1, 1, false));
console.log(PosNeg(-4, -5, true)); */

/* Conditionals #7: 
Given an int n, return true if it is within 10 of 100 or 200.
Hint: Check out the C# Math class for absolute value
NearHundred(103) -> true
NearHundred(90) -> true
NearHundred(89) -> false 
function NearHundred(n) {
	var within100 = Math.abs(n-100);
	var within200 = Math.abs(n-200);
	if(within100 < 11 || within200 < 11) {
		return true;
	}
	return false;
}
console.log(NearHundred(103));
console.log(NearHundred(90));
console.log(NearHundred(89)); */

/* Conditionals #6: 
Given two ints, a and b, return true if one if them is 10 or if their sum is 10. 
Makes10(9, 10) -> true
Makes10(9, 9) -> false
Makes10(1, 9) -> true 
function Makes10(a, b) {
	if(a==10 || b==10 || a+b==10)
	{
	return true;
	}
	return false;
}
console.log(Makes10(9, 10));
console.log(Makes10(9, 9));
console.log(Makes10(1, 9)); */

/* Conditionals #5: 
We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. 
We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble. 
ParrotTrouble(true, 6) -> true
ParrotTrouble(true, 7) -> false
ParrotTrouble(false, 6) -> false 
function ParrotTrouble(isTalking, hour) {
  if(hour < 7 || hour > 20) {
	  if(isTalking)
	  {
		  return true;
	  }
  }
  return false;
}
console.log(ParrotTrouble(true, 6));
console.log(ParrotTrouble(true, 7));
console.log(ParrotTrouble(false, 6)); */


/* Conditionals #4: 
Given an int n, return the absolute value of the difference between n and 21, 
except return double the absolute value of the difference if n is over 21. 
Diff21(23) -> 4
Diff21(10) -> 11
Diff21(21) -> 0 
function Diff21(n) {
	if(n > 21) {
		var absVal = Math.abs(n-21) * 2;
		return absVal;
	} else {
		var absVal = Math.abs(n-21);
		return absVal;
	}
}
console.log(Diff21(23));
console.log(Diff21(10));
console.log(Diff21(21)); */


/* Conditionals #3: 
Given two int values, return their sum. However, if the two values are the same, then return double their sum. 
SumDouble(1, 2) -> 3
SumDouble(3, 2) -> 5
SumDouble(2, 2) -> 8 
function SumDouble(a, b) {
  if(a != b) {
	  return a+b;
  }  
  return (a+b) *2;
  
} 
console.log(SumDouble(1, 2));
console.log(SumDouble(3, 2));
console.log(SumDouble(2, 2)); */

/* Conditionals #2: 
The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in. 
sleepIn(false, false) -> true
sleepIn(true, false) -> false
sleepIn(false, true) -> true
function sleepIn(isWeekday, isVacation) {
	if(!isWeekday || isVacation) {
		return true;
	}
	return false;
}
console.log(sleepIn(false, false));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true)); */


/* Conditionals #1: 
We have two children, a and b, and the parameters aSmile and bSmile indicate if each is smiling. 
We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble. 
AreWeInTrouble(true, true) -> true
AreWeInTrouble(false, false) -> true
AreWeInTrouble(true, false) -> false 
function AreWeInTrouble(aSmile, bSmile) {
	if((aSmile && bSmile) || !aSmile && !bSmile)
	{return true;}
return false;
}
console.log(AreWeInTrouble(true, true));
console.log(AreWeInTrouble(false, false));
console.log(AreWeInTrouble(true, false)); */


// ============================= STRINGS =============================

/* -------- STRINGS #24:
Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged. 
StripX("xHix") -> "Hi"
StripX("xHi") -> "Hi"
StripX("Hxix") -> "Hxi" */

//function StripX(str) {
//    var indexOfX = str.indexOf("x");
//    var lastLetter = str.slice(-1)
//    if (indexOfX == 0 && lastLetter == "x") {
//        return str.slice(1, str.length - 1);
//    } else if (indexOfX != 0 && lastLetter == "x") {
//        return str.slice(0, str.length - 1);
//    } else {
//        return str.slice(1, str.length);
//    }
//}

//console.log(StripX("xHix"));
//console.log(StripX("xHi"));
//console.log(StripX("Hxix"));


/* -------- STRINGS #23:
Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. 
The string may be any length.
TweakFront("Hello") -> "llo"
TweakFront("away") -> "aay"
TweakFront("abed") -> "abed"
function TweakFront(str) {
	var firstLetter = str.slice(0,1);
	var secondLetter = str.slice(1,2);
	if(firstLetter !="a" && secondLetter !="b") {
		return str.slice(2,str.length);
	} else if(firstLetter =="a" && secondLetter =="b") {
		return str;
	} else if(firstLetter =="a") {
		return str.slice(0,1) + str.slice(2);
	} else {
		return str.slice(1);
	}
}
console.log(TweakFront("Hello"));
console.log(TweakFront("away"));
console.log(TweakFront("abed"));
console.log(TweakFront("mbed")); */

/* -------- STRINGS #22:
Given two strings, append them together (known as "concatenation") and return the result.
 However, if the strings are different lengths, omit chars from the longer string 
 so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length. 
MinCat("Hello", "Hi") -> "loHi"
MinCat("Hello", "java") -> "ellojava"
MinCat("java", "Hello") -> "javaello"
function MinCat(strA, strB) {
	var aLength = strA.length;
	var bLength = strB.length;
	if(aLength == bLength) {
		return strA+strB;
	} else if(aLength > bLength) {
		var diff = aLength - bLength;
		var newA = strA.slice(diff, aLength);
		return newA + strB;
	} else {
		var diff = bLength-aLength;
		var newB = strB.slice(diff, bLength);
		return strA + newB;
	}
}
console.log(MinCat("Hello", "Hi"));
console.log(MinCat("Hello", "java"));
console.log(MinCat("java", "Hello"));
*/

/* -------- STRINGS #21:
Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited". 
FrontAgain("edited") -> true
FrontAgain("edit") -> false
FrontAgain("ed") -> true 
function FrontAgain(str) {
	var first2 = str.slice(0,2);
	var last2 = str.slice(str.length-2,str.legnth);
	if(first2 == last2) {
		return true;
	} else {
		return false;
	}
}
console.log(FrontAgain("edited"));
console.log(FrontAgain("edit"));
console.log(FrontAgain("ed")); */

/* -------- STRINGS #20:
Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign". 
SwapLast("coding") -> "codign"
SwapLast("cat") -> "cta"
SwapLast("ab") -> "ba"
function swapLast(str) {
	if(str.length > 1)
	{
		var newStr = str.slice(0,str.length-2);
		newStr += str.slice(str.length-1); 
		newStr += str.slice(str.length-2, str.length-1);
		return newStr;
	}
}
console.log(swapLast("coding"));
console.log(swapLast("cat"));
console.log(swapLast("ab")); */

/* -------- STRINGS #19:
Given two strings, append them together (known as "concatenation") and return the result. 
However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat". 
ConCat("abc", "cat") -> "abcat"
ConCat("dog", "cat") -> "dogcat"
ConCat("abc", "") -> "abc" 
var conCat = function (strA, strB) {
	if(strA.slice(-1) != strB.slice(0,1))
	{
		return strA + strB;
	}
	else 
	{
		return strA.slice(0,strA.length-1) + strB;
	}
}
console.log(conCat("abc", "cat"));
console.log(conCat("dog", "cat"));
console.log(conCat("abc", ""));
*/
/* -------- STRINGS #18:
Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". 
If either string is length 0, use '@' for its missing char. 
LastChars("last", "chars") -> "ls"
LastChars("yo", "mama") -> "ya"
LastChars("hi", "") -> "h@"
var lastChars = function(str1,str2)
{
	if(str1.length > 0 && str2.length > 0)
	{
		return str1.substring(0,1) + str2.slice(-1);
	} else if(str1.length == 0 && str2.length != 0) {
		return "@" + str2.slice(-1);
	} else if (str1.length != 0 && str2.length == 0) {
		return str1.substring(0,1) +"@";
	} else {
		return "@" + "@";
	}
}
console.log(lastChars("last", "chars"));
console.log(lastChars("yo", "mama"));
console.log(lastChars("hi", ""));
*/
/* -------- STRINGS #17:
Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars. 
AtFirst("hello") -> "he"
AtFirst("hi") -> "hi"
AtFirst("h") -> "h@"
var AtFirst = function (str) {
	if(str.length < 2)
	{
		return str + "@";
	} else {
		return str.substring(0,2);
	}
}
console.log(AtFirst("hello"));
console.log(AtFirst("hi"));
console.log(AtFirst("h"));
*/
/* -------- STRINGS #16:
Given a string, return true if "bad" appears starting at index 0 or 1 in the string, 
such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.
HasBad("badxx") -> true
HasBad("xbadxx") -> true
HasBad("xxbadxx") -> false 
var hasBad = function(str) {
	if(str.substring(0,3) == "bad" || str.substring(1,4) == "bad")
	{
		return true;
	} else {
		return false;
	}
}
console.log(hasBad("badxx"));
console.log(hasBad("xbadxx"));
console.log(hasBad("xxbadxx"));
*/

/* -------- STRINGS #15:
Given a string and an index, return a string length 2 starting at the given index. 
If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2. 
TakeTwoFromPosition("java", 0) -> "ja"
TakeTwoFromPosition("java", 2) -> "va"
TakeTwoFromPosition("java", 3) -> "ja"
var TakeTwoFromPosition = function(str,n) {
	if(n > (str.length-2))
	{	
		return str.substring(0,2);			
	} else {
		return str.substring(n,n+2);
	}
} 
console.log(TakeTwoFromPosition("java", 0));
console.log(TakeTwoFromPosition("java", 2));
console.log(TakeTwoFromPosition("java", 3));
*/

/* -------- STRINGS #14:
Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n. 
FrontAndBack("Hello", 2) -> "Helo"
FrontAndBack("Chocolate", 3) -> "Choate"
FrontAndBack("Chocolate", 1) -> "Ce"
var frontAndBack = function(str,n) {
	var firstN = str.slice(0,n);
	var lastN = str.slice(-n, str.length);
	return firstN + lastN;
}
console.log(frontAndBack("Hello", 2));
console.log(frontAndBack("Chocolate", 3));
console.log(frontAndBack("Chocolate", 1));
*/
/* -------- STRINGS #13:
Given a string, return true if it ends in "ly". 
EndsWithLy("oddly") -> true
EndsWithLy("y") -> false
EndsWithLy("oddy") -> false
var EndsWithLy = function(str)
{
	if(str.substring(str.length-2, str.length)=== "ly")
	{
		return true;
	} else {
		return false;
	}
}
console.log(EndsWithLy("oddly"));
console.log(EndsWithLy("y"));
console.log(EndsWithLy("oddy"));
*/

/* -------- STRINGS #12:
Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". 
The string length will be at least 2. 
MiddleTwo("string") -> "ri"
MiddleTwo("code") -> "od"
MiddleTwo("Practice") -> "ct"
var MiddleTwo = function(str) {
	if(str.length % 2 === 0)
	{
		var mid = str.length / 2;
		return str.substring((mid-1), (mid+1));
	}
}
console.log(MiddleTwo("string"));
console.log(MiddleTwo("code"));
console.log(MiddleTwo("Practice"));
*/

/* -------- STRINGS #11:
Given a string, return a string length 1 from its front, unless front is false,
 in which case return a string length 1 from its back. The string will be non-empty. 
TakeOne("Hello", true) -> "H"
TakeOne("Hello", false) -> "o"
TakeOne("oh", true) -> "o"
var TakeOne = function(str,fromFront){
	if(fromFront===true){
		return str.substring(0,1);
	} else {
		return str.slice(-1);
	}
}
console.log(TakeOne("Hello", true));
console.log(TakeOne("Hello", false));
console.log(TakeOne("oh", true));
*/

/* -------- STRINGS #10:
Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. 
The string length will be at least 2. 
RotateRight2("Hello") -> "loHel"
RotateRight2("java") -> "vaja"
RotateRight2("Hi") -> "Hi"
var rotateRight2 = function(str) {
	var right2 = str.slice(-2,str.length);
	return right2 + str.substring(0,(str.length-2));
}
console.log(rotateRight2("Hello"));
console.log(rotateRight2("java"));
console.log(rotateRight2("Hi"));
*/

/* -------- STRINGS #9:
Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2. 
Rotateleft2("Hello") -> "lloHe"
Rotateleft2("java") -> "vaja"
Rotateleft2("Hi") -> "Hi"
var rotateLeft2 = function(str) {
	var first2 = str.substring(0,2);
	return str.slice(2,str.length) + first2;
}
console.log(rotateLeft2("Hello"));
console.log(rotateLeft2("java"));
console.log(rotateLeft2("Hi"));
*/

/* -------- STRINGS #8:
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0). 
LongInMiddle("Hello", "hi") -> "hiHellohi"
LongInMiddle("hi", "Hello") -> "hiHellohi"
LongInMiddle("aaa", "b") -> "baaab"
var longInMiddle = function (a,b) {
	if(a.length > b.length)
	{
		return b+a+b;
	} else {
		return a+b+a;
	}
}
console.log(longInMiddle("Hello", "hi"));
console.log(longInMiddle("hi", "Hello"));
console.log(longInMiddle("aaa", "b"));
*/
/* -------- STRINGS #7:
Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2. 
TrimOne("Hello") -> "ell"
TrimOne("java") -> "av"
TrimOne("coding") -> "odin"
var trimOne = function(str) {
    return str.substring(1,(str.length -1));
} 
console.log(trimOne("Hello"));
console.log(trimOne("java"));
console.log(trimOne("coding")); */

/* -------- STRINGS #6:
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo". 
FirstHalf("WooHoo") -> "Woo"
FirstHalf("HelloThere") -> "Hello"
FirstHalf("abcdef") -> "abc"
var firstHalf = function(str) {
    if(str.length % 2 == 0)
    {
        var halfLength = str.length / 2;
        return str.substring(0,halfLength);
    }
}
alert(firstHalf("WooHoo"));
alert(firstHalf("HelloThere"));
alert(firstHalf("abcdef"));
*/

/* -------- STRINGS #5:
Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2. 
MultipleEndings("Hello") -> "lololo"
MultipleEndings("ab") -> "ababab"
MultipleEndings("Hi") -> "HiHiHi"
public string MultipleEndings(string str) {
var multipleEndings = function(str) {
    var newStr = str.substring(str.length-2,str.length);
    return newStr+newStr+newStr;
}
alert(multipleEndings("Hello"));
alert(multipleEndings("ab"));
alert(multipleEndings("Hi"));
*/

/* -------- STRINGS #4:
Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>".
Hint: Substrings are your friend here 
InsertWord("<<>>", "Yay") -> "<<Yay>>"
InsertWord("<<>>", "WooHoo") -> "<<WooHoo>>"
InsertWord("[[]]", "word") -> "[[word]]"
var insertWord = function(container,word) {
    return container.slice(0,2)+word+container.slice(2,4);
}
alert(insertWord("<<>>", "Yay"));
alert(insertWord("<<>>", "WooHoo"));
alert(insertWord("[[]]", "word"));
*/

/* -------- STRINGS #3:
The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>". 
MakeTags("i", "Yay") -> "<i>Yay</i>"
MakeTags("i", "Hello") -> "<i>Hello</i>"
MakeTags("cite", "Yay") -> "<cite>Yay</cite>"
var makeTags = function (tag,content) {
    return "<"+tag+">"+content+"</"+tag+">";
}
alert(makeTags("i","Yay"));
alert(makeTags("i","Hello"));
alert(makeTags("cite","Yay"));
*/

/* -------- STRINGS #2: 
Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi". 
Abba("Hi", "Bye") -> "HiByeByeHi"
Abba("Yo", "Alice") -> "YoAliceAliceYo"
Abba("What", "Up") -> "WhatUpUpWhat"
var abba = function(a,b) {
    return a+b+b+a;
}
alert(abba("Hi","Bye"));
alert(abba("Yo","Alice"));
alert(abba("What","Up"));
*/


/* -------- STRINGS #1:
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!". 
SayHi("Bob") -> "Hello Bob!"
SayHi("Alice") -> "Hello Alice!"
SayHi("X") -> "Hello X!"
var sayHi = function (name) {
    alert("Hello " + name);
}
sayHi("Bob");
sayHi("Alice");
sayHi("X"); */