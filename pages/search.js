// pages/search.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SearchPage = () => {
    const router = useRouter();
    const { q } = router.query; // Get the search query parameter

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (q) {
                const response = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
                const results = await response.json();
                setSearchResults(results);
            }
        };

        fetchData();
    }, [q]);

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl mb-8'>Rezultatul căutărilor pentru: {q}</h1>
            <div className='flex gap-4'>
                {searchResults.map((result) => (
                    <div key={result._id}>
                        <Link href={`/product/${result._id}`}>
                            <div className="w-[200px] h-[130px] overflow-hidden items-center flex rounded-md"><img src={result.images[0]} className="object-contain rounded-md" /></div>
                            <h2>{result.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
