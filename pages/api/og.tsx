import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

const font = fetch(new URL('../../public/fonts/kaisei-tokumin-bold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
);

const font2 = fetch(
  new URL('../../public/fonts/kaisei-tokumin-latin-400-normal.woff2', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const fontData = await font;
  const fontData2 = await font2;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(${process.env.SITE_DOMAIN ?? ''}/og-bg.jpg)`,
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Kaisei Tokumin',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {postTitle}
        </div>
        <img
          style={{
            position: 'absolute',
            bottom: 60,
            left: 190,
            // marginLeft: 190,
            // marginRight: 190,
            height: '140px',
            width: '140px',
            // backgroundImage: `url(${process.env.SITE_DOMAIN ?? ''}/static/images/avatar.jpg)`,
            // backgroundSize: 'contain',
            borderRadius: '50%',
            // filter: 'grayscale(1)'
          }}
          src={`${process.env.SITE_DOMAIN ?? ''}/static/images/avatar.jpg`}
        />
        <p
          style={{
            fontFamily: 'Kaisei Tokumin',
            fontSize: 45,
            position: 'absolute',
            bottom: 75,
            left: 360,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: '#FEFEFE',
            fontWeight: 'lighter',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Alaeddine Douagi
        </p>
        <p
          style={{
            fontFamily: 'Kaisei Tokumin',
            fontSize: 35,
            position: 'absolute',
            bottom: 25,
            left: 360,
            // letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            opacity: 0.8,
            fontWeight: 'lighter',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Web developer
        </p>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Kaisei Tokumin',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
