const display = document.querySelector(".container .display");

function AppendToDisplay(input) 
{
    display.value += input;
}

function Calculate()
{
    try 
    {
        display.value = eval(display.value)
    }
    catch (error)
    {
        display.value = "Syntax Error";
        setTimeout(function ()
        {
            Clear();
        },2000)
    }
}

function Clear()
{
    display.value = "";
}