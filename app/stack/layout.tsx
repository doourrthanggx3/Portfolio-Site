import BaseLayout from '../../components/BaseLayout';

export default function StackLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout themeClass="stack-theme">{children}</BaseLayout>;
}
