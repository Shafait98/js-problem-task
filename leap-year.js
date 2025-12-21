function leapYear(year)
{
    if(year % 100 !==0 && year % 4 === 0)
    {
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0)
    {
        return true
    }

    else
        {
            return false;
        }
}

const show = leapYear(2012);
const show2 = leapYear(2013);
console.log(show);
console.log(show2);