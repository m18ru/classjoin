/**
 * Conditionally join class names together.
 * 
 * @param withConditions Object where keys is a class names, and values is a
 *  condition for adding this class name to the list.
 * @param withoutConditions List of unconditional class names.
 * @returns String with list of class names.
 */
function classJoin(
	withConditions: ClassNamesList,
	withoutConditions?: string[],
): string
{
	let classes: string[] = [];
	const keys = Object.keys( withConditions );
	
	for ( let i = 0, n = keys.length; i < n; i++ )
	{
		const key = keys[i];
		
		if ( withConditions[key] )
		{
			classes.push( key );
		}
	}
	
	if ( withoutConditions )
	{
		classes = withoutConditions.concat( classes );
	}
	
	return classes.join( ' ' );
}

/**
 * Objects of class names with conditions.
 */
export interface ClassNamesList
{
	[key: string]: boolean | undefined | null;
}

/**
 * Module.
 */
export {
	classJoin as default,
	// ClassNamesList,
};
