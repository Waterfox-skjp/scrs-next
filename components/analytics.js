export default function Analytics() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-61336529-1`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-61336529-1');
          `,
        }}
      />
    </>
  )
}
