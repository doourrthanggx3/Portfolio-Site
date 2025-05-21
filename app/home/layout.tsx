import BaseLayout from '../../components/BaseLayout';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout themeClass="home-theme">{children}</BaseLayout>;
}
