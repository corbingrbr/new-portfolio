import React from 'react';

const TechnologyIcons = ({ technologies, justifyCenter }) => (
    <div className={`row mb-0 ${justifyCenter ? "justify-content-center" : ""}`}>
        {technologies.map((technology, ndx) => <span key={ndx} className="col-sm-1 pr-4"><img src={`/assets/icons/${technology}.svg`} alt={`${technology}.svg`} height={24} width={24} /></span>)}
    </div>
)

export default TechnologyIcons;