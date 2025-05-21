import BaseLayout from '../../components/BaseLayout';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout themeClass="about-theme">{children}</BaseLayout>;
}
