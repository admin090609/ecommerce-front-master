// api/search.js

const { runSearch } = require("../../lib/mongoDB"); // Adjust the path accordingly

export default async function handler(req, res) {
    try {
        const { q, limit } = req.query;

        // Perform the search using the runSearch function with the provided query

        const results = await runSearch(q, limit);
        res.status(200).json(results);
    } catch (error) {
        console.error("Error in API route:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}