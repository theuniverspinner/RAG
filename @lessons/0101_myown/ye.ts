import { customQueryEngine } from "../01_breakingdown.ts";


const response28 = await customQueryEngine.query({
  query: `
    Bbased on the salient themes found,
    what is your superb holistic advice
    for the author as a human being in his early 30s?
  `
})

console.log(response28.toString());

// okay so
// here i am thinking that
// 

/**
 * wow first of all
 * how could the script be improved
 * with the help of llm
 * 
 * other than that, 
 * the documents fetching from the other folder
 * or just copy-paste it again!
 * to see how the llm would deal with the larger piece of context
 * but then again
 * it should get only the relevant with Retriever
 * lemme check on that!
 */