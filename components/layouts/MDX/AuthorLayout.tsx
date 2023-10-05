import Image from '@/components/Image';
import type { Authors } from 'contentlayer/generated';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, occupation, company } = content;

  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Alaeddine Douagi</h1>
          <h2 className="text-sm font-normal md:text-base">
            {occupation} <span className="font-semibold">{company}</span>
          </h2>
          <a
            className="inline-flex items-center bg-gradient-to-r from-gradient-1-start to-gradient-1-end bg-clip-text font-extrabold text-transparent"
            href="/alaeddine-douagi-CV.pdf"
            download="alaeddine-douagi-CV.pdf"
          >
            Download CV
          </a>
        </div>
        <div>
          <Image
            alt="Alaeddine Douagi"
            height={130}
            width={130}
            src={avatar || ''}
            className="rounded-full object-scale-down"
          />
        </div>
      </div>
      <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
