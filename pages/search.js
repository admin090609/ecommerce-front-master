// pages/search.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SearchPage = () => {
    const router = useRouter();
    const { q } = router.query; // Get the search query parameter
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
    const fetchSearchResults = async () => {
        setLoading(true);
        setSearchResults([]); // Clear previous search results

        try {
            const query = router.query.q;

            if (query) {
                const searchResponse = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const results = await searchResponse.json();
                setSearchResults(results);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchSearchResults();
}, [router.query.q]);


    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='md:text-3xl text-2xl mb-8 flex justify-center items-center mt-6 md:mt-0'>Rezultatul căutărilor pentru: {q}</h1>
            {loading && <div className='flex flex-col items-center'>
                <div class="loading mb-8"></div>
                <div className='text-2xl'>Loading...</div>
                </div>}
            {searchResults.length > 0 && (
                <div className='flex gap-4 flex-wrap items-center justify-center'>
                    {searchResults.map((result) => (
                        <div key={result._id}>
                            <Link href={`/product/${result._id}`}>
                                <div className="md:w-[200px] w-[170px] h-[130px] overflow-hidden items-center flex rounded-md"><img src={result.images[0]} className="object-contain rounded-md" /></div>
                                <h2>{result.title}</h2>
                            </Link>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
};

export default SearchPage;
