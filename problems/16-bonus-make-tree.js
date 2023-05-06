/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

const makeTree = (categories, parent) => {
    const node = {};
    const matchingCategories = categories.filter((category) => {
        return category.parent === parent;
    });

    matchingCategories.forEach((category) => {
        node[category.id] = makesTree(categories, category.id);
    });
    return node;
}



    /*
    if (categories.length === 0) return {}
    for (let i = 0; i < categories.length; i++) {
        const obj = categories[i]; // obj in categories[i]
        const objID = obj['id']
        let parentObj = {}
        if (obj.parent === null) { // any object with a Null parent an empty array at the base of the tree
            parentObj[objID] = makeTree(categories.slice(1), parentObj)  // parentObj now = { animal: {recursing}}
            return parentObj
        }
        for (key in obj) { // checks every key in obj at categories[i]
            if (key=== 'parent' && parent[obj[key]]) { // alternatively, Object.keys(parent).includes(obj[key]), checks to see if the current key === parent, and its value === key in parent {}
                parentObj[objID] = makeTree(categories.slice(1), parentObj) // parent[obj[key]] += {obj['id']:{}} // adds object {current object ID : {}}

            }
        }
        return parentObj
    }
};*/
/*const categories2 = [
    parent: {Animals :}
        {Mammals: }
         { cats : }
        {persian : }


    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];*/

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = makeTree;

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
