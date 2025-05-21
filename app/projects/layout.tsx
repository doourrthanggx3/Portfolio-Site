import BaseLayout from '../../components/BaseLayout';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout themeClass="projects-theme">{children}</BaseLayout>;
}
