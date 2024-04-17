import { getCustomQueryEngine } from "./lib.ts";

const customQueryEngine = await getCustomQueryEngine('./@knowledge/01.02')

const response28 = await customQueryEngine.query({
  query: `
    Bbased on the salient themes found,
    what is your superb holistic advice
    for the author as a human being in his early 30s?
  `
})

console.log(response28.toString());

/**
 * okay so,
 * in this script
 * we've hit the stumbling block
 * SimpleDirectoryReader is not accounting for images
 * 
 * 
 * okay i've done some research on the problem
 * it seems that from this point
 * i'd have to go on migrating
 * since there's no help in the old docs
 * so they must be new then
 * 
 * i guess some simple get started guide
 * from their official new docs
 * should do?
 */

