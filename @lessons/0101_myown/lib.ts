import * as llamaindex from "npm:llamaindex@0.1.8"
import * as mod from "https://deno.land/std@0.213.0/dotenv/mod.ts";
const keys = await mod.load({export:true}) // read API key from .env

const customLLM = new llamaindex.OpenAI();
const customEmbedding = new llamaindex.OpenAIEmbedding();

const customServiceContext = new llamaindex.serviceContextFromDefaults({
  llm: customLLM,
  embedModel: customEmbedding,
})

const customQAPrompt = function({ context="", query="" }) {
  return `
  Context information is below.
  ---------------------
  ${context}
  ---------------------
  Given the context information, answer the query.
  Include a random fact about dogs and whales in your answer.\
  The dogs & whales fact can come from your training data.
  Query: ${query}
  Answer:
  `
};

const customResponseBuilder = new llamaindex.SimpleResponseBuilder(customServiceContext, customQAPrompt)

const customSynthesizer = new llamaindex.ResponseSynthesizer({
  responseBuilder: customResponseBuilder,
  serviceContext: customServiceContext,
})

export const getCustomQueryEngine = async (docsPath) => {
  const documents = await new llamaindex.SimpleDirectoryReader()
    .loadData({ directoryPath: docsPath })
  const index = await llamaindex.VectorStoreIndex.fromDocuments(documents)
  const customRetriever = new llamaindex.VectorIndexRetriever({
    index,
  })
  
  const customQueryEngine = new llamaindex.RetrieverQueryEngine(customRetriever, customSynthesizer)
  return customQueryEngine;
}

