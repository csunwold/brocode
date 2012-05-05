brocode
=======

Bro, why should you code in a different language than you speak? 

Hello World
-----------

    holla at me "Sup Brah"

Hello World to a file
---------------------

    holla at "/rage/on/nix/out.txt" "Sup Brah"

Function Definition
-------------------

Bro's dont like superflous characters, so toss those curly braces out hater.

    broroutine helloWorld:
        holla at me "Sup Brah"

Function Invocation
-------------------

    broroutine helloWorld:
        holla at me "Sup Brah"

    helloWorld

Outputs:

    Sup Brah


Or with parameters

    broroutine helloWorld text:
        holla at me text

    helloWorld "Sup Brah"

Outputs:

    Sup Brah


Loops
-----

    for redbull in case:
    	pound redbull

    while case is not empty:
    	redbull = case.remove 1
    	pound redbull


Built in types
---------------

* String 
* Number  
* Collection
* Boolean

