import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({children}) => (
    <div className = "categories">
        <h3 className="categories__title">Recomendado</h3>
        {children}
        <h3 className="categories__title">Mi lista</h3>
        {children}
        <h3 className="categories__title">Acción</h3>
        {children}
    </div>
)

export default Categories