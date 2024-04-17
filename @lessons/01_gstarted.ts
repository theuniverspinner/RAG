import * as mod from "https://deno.land/std@0.213.0/dotenv/mod.ts";
const keys = await mod.load({export:true}) // read API key from .env

import { 
  Document, 
  VectorStoreIndex, 
  SimpleDirectoryReader 
} from "npm:llamaindex@0.1.8"


const documents = await new SimpleDirectoryReader()
  .loadData({ directoryPath: './@knowledge' })

// let's create an Index from those documents

const index = await VectorStoreIndex.fromDocuments(documents)

/**
 * next, let's create a QUERY_ENGINE
 * QE = Retriever + PostProcessor + Combinor
 */

const queryEngine = index.asQueryEngine();

const response = await queryEngine.query({
  query: "what is this all about?"
})

console.log(response.toString());