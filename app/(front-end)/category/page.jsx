import React from 'react';
// import categories from '../data/categories';
import { getData } from "@/lib/getData";

const CategoriesPage = () => {
    // Sort categories by name in ascending order
    const sortedCategories = categories.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div>
            <h1>All Categories</h1>
            <ul>
                {sortedCategories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesPage;
