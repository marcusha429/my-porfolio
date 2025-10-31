import { supabase } from './supabase'

export type ProjectCategory = 'webapp' | 'mobile' | 'ai' | 'uiux';

export type Project = {
    id: string;
    title: string;
    category: ProjectCategory;
    date: string;
    short_description: string;
    full_description: string;
    responsibilities: string[];
    languages: string[];
    frameworks: string[];
    deployment: string;
    images: string[];
    video_url?: string;
    report_url?: string;
    github_url?: string;
    website_url?: string;
    collaborators?: string[];
};

export type Education = {
    id: string;
    name: string;
    period: string;
    major: string;
    location: string;
    status: string;
    image_url: string;
    image_position?: string;
    courses: string[];
    project_courses: string[];
    display_order: number;
};

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
}

// Fetch projects by category
export async function getProjectsByCategory(category: ProjectCategory): Promise<Project[]> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
}

// Fetch all education entries
export async function getEducation(): Promise<Education[]> {
    const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) throw error;
    return data || [];
}