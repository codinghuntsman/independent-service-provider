import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{
                    color: match ? "HotPink" : 'black', textDecoration: "none",
                    fontWeight: "bold"
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;