let x = ['Today is sunday','We are into seventh module','You will learn soon javascript','We are  in the class of javascript module'];

function compare(str)
{
    if((str[0].startsWith('W') && str[0].endsWith('e')) || (str[1].startsWith('W') && str[1].endsWith('e')) || (str[2].startsWith('W') && str[2].endsWith('e')) || (str[3].startsWith('W') && str[3].endsWith('e')) ) {
        console.log('The string is matching');
    }
    else if((str[0].startsWith('T') && str[0].endsWith('u')) && (str[1].startsWith('T') && str[1].endsWith('u')) && (str[2].startsWith('T') && str[2].endsWith('u'))&& (str[3].startsWith('T') && str[3].endsWith('u')) )
    {
        console.log('you are printing first statement');
    }
    else if((str[0].startsWith('Y') && str[0].endsWith('t')) && (str[1].startsWith('Y') && str[1].endsWith('t')) && (str[2].startsWith('Y') && str[2].endsWith('t'))&& (str[3].startsWith('Y') && str[3].endsWith('t')) )
    {
        console.log('you have found the match');
    }
    else
    {
        console.log('not found');
    }
}
compare(x);
