/**
 * Conditionally join classNames together.
 * 
 * Arguments can be string (unconditional class name) or object where keys is a
 * class names, and values is a condition for adding this class name to the
 * list.
 * 
 * @param rest Class names or objects of class names with conditions.
 * @returns String with list of class names.
 */
function classNames( ...rest: Array<ClassNamesList | string> ): string
{
	const classes: string[] = [];
	
	for ( const arg of rest )
	{
		if ( !arg )
		{
			continue;
		}
		
		if ( typeof arg === 'string' )
		{
			classes.push( arg );
		}
		else
		{
			const keys = Object.keys( arg );
			
			for ( const key of keys )
			{
				if ( arg[key] )
				{
					classes.push( key );
				}
			}
		}
	}
	
	return classes.join( ' ' );
}

/**
 * Objects of class names with conditions.
 */
export interface ClassNamesList
{
	[key: string]: boolean | any;
}

/**
 * Module.
 */
export {
	classNames as default,
	// ClassNamesList,
};
