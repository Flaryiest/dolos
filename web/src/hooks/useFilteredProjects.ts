import { useMemo } from 'react';
import { useProjects } from '../stores';

export function useFilteredProjects(query: string) {
    const projects = useProjects();
    
    return useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return projects;
        return projects.filter(p =>
            p.title?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q)
        );
    }, [projects, query]);
}
