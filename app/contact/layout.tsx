import BaseLayout from '../../components/BaseLayout';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout themeClass="contact-theme">{children}</BaseLayout>;
}
