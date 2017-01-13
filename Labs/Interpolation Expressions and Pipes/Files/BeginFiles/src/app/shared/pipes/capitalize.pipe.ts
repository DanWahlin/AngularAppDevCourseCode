/*

TODO: Create a Custom Capitalize Pipe

Perform the following steps:

1. Import Pipe and PipeTransform from the @angular/core module.

2. Create a class named CapitalizePipe (make sure you export it).

3. Implement PipeTransform on the class.

4. Inside of the class add a function named transform that looks like the following:

   transform(value: any) {
		
   }

5. Add the following code into the transform() function:

   if (value) {
     return value.charAt(0).toUpperCase() + value.slice(1);
   }
   return value;

6. Add the @Pipe() decorator on top of the CapitalizePipe class.

7. Inside of the decorator pass the following to set the name of the pipe
   that can be used inside of templates:
	 
   { name: 'capitalize' }

*/


