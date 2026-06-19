export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  { id: '1', name: 'Priya Sharma', role: 'Frontend Developer', company: 'TechCorp', text: 'CodeAcademia helped me land my first developer job. The tutorials are incredibly well-structured and easy to follow. The W3Schools-style layout makes learning fun!', rating: 5 },
  { id: '2', name: 'Rahul Verma', role: 'Data Scientist', company: 'DataViz Inc', text: 'The Machine Learning tutorials are outstanding. Clear explanations with practical code examples. I went from zero ML knowledge to building models in just 3 months.', rating: 5 },
  { id: '3', name: 'Sarah Chen', role: 'Full Stack Developer', company: 'StartupXYZ', text: 'Best programming tutorial platform I\'ve found. The code examples are modern, the explanations are clear, and the progress tracking keeps me motivated.', rating: 5 },
  { id: '4', name: 'Amit Patel', role: 'Student', company: 'IIT Mumbai', text: 'CodeAcademia\'s interview questions section is a goldmine. It helped me prepare for technical interviews and I cracked placements at top companies.', rating: 4 },
  { id: '5', name: 'Lisa Wang', role: 'Backend Developer', company: 'CloudBase', text: 'The Node.js and database tutorials are production-quality. I learned more here than in any paid course. The interactive code editor is a game-changer!', rating: 5 },
  { id: '6', name: 'David Okafor', role: 'Mobile Developer', company: 'AppStudio', text: 'From React Native basics to advanced patterns — CodeAcademia covers it all. The roadmap visualization helped me plan my learning journey perfectly.', rating: 4 },
];
