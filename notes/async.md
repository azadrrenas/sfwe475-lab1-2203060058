While await fetch is waiting for data, the rest of the program doesn't stop It can still run other tasks and handle events in the background

TypeScript types only work at compile time, not at runtime typeScript did not throw an error but at runtime todo.done was undefined because the API uses completed

The first error shows that a required field  is missing. The second error shows that done has the wrong type  

Parameter type is set to unknown because the incoming data hasn't been validated yet. Using unknown forces us to perform type checking first
