import React from 'react';

const Phones = (props) => {
    return (
        <div className="mt-5 w-full h-full flex justify-around">
            {props.categories.map(category =>
                category.catalog_id === 1 ? (
                    <div className="text-gray-500" key={category.id}>
                        <h3>{category.title}</h3>
                        {props.brands.map(brand =>
                            brand.category_id === category.id ? (
                                <p key={brand.id}>{brand.name}</p>
                            ) : null
                        )}
                    </div>
                ) : null
            )}
        </div>
    );
};

export default Phones;