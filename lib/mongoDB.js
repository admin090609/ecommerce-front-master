// utils/mongoDB.js

const { MongoClient } = require("mongodb");

// utils/mongoDB.js

const connectToMongoDB = async () => {
    const client = await MongoClient.connect(
        "mongodb+srv://two2tek:Pass2023@cluster0.deqdqov.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to MongoDB");
    return client;
};

const runSearch = async (query, limit) => {
    const agg = [
        {
            $search: {
                index: "searchProducts",
                text: {
                    query: query,  // Use the provided query or an empty string if not provided
                    path: {
                        wildcard: "*"
                    },
                    fuzzy: {}
                }
            },
        },
        {
            $project: {
                _id: 1,
                title: 1,
                description: 1,
                images: 1
            },
        },
    ];

    if (limit) {
        agg.push({ $limit: parseInt(limit, 10) });
    }   

    const client = await connectToMongoDB();
    try {
        const coll = client.db("test").collection("products");
        console.log("Executing MongoDB search query:", agg);
        let cursor = await coll.aggregate(agg);

        // Collect the results in an array
        const resultsArray = await cursor.toArray();
        return resultsArray;
    } finally {
        client.close();
    }
};

module.exports = { runSearch };
