import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Support() {
  useEffect(() => {
    // Load Buy Me a Coffee button script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
    script.setAttribute('data-name', 'bmc-button');
    script.setAttribute('data-slug', 'ermiyas');
    script.setAttribute('data-color', '#5F7FFF');
    script.setAttribute('data-emoji', '❣️');
    script.setAttribute('data-font', 'Comic');
    script.setAttribute('data-text', 'Buy me a coffee for life,');
    script.setAttribute('data-outline-color', '#000000');
    script.setAttribute('data-font-color', '#ffffff');
    script.setAttribute('data-coffee-color', '#FFDD00');

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Support - Ermiyas Damte Haile</title>
        <meta name="description" content="Support Ermiyas Damte's work by buying him a coffee. Your support helps create more amazing projects!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App">
        <section className="w-full flex items-center justify-center py-8">
          <Link href="/" className="text-[var(--color-primary)] hover:text-[var(--color-botton)] transition-colors text-lg">
            &larr; Back to Home
          </Link>
        </section>

        <section className="w-full flex flex-col items-center justify-center px-4 py-16 min-h-[80vh]">
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] text-center mb-8">
              Support My Work ☕
            </h1>

            <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-gray-600">
              If you enjoy my projects and want to support my work, consider buying me a coffee!
              Your support helps me create more amazing projects and keep learning new technologies.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* QR Code Section */}
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  Scan QR Code
                </h2>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-[var(--color-secondary)]">
                  <img
                    src="/coffee.png"
                    alt="Buy Me a Coffee QR Code"
                    className="w-64 h-64 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Scan with your phone to support directly
                </p>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  Or Click Below
                </h2>
                <div className="flex flex-col items-center gap-6">
                  <div id="bmc-button-container" className="flex justify-center">
                    <a
                      href='https://buymeacoffee.com/ermiyas'
                      target='_blank'
                      className="flex items-center gap-2  px-5 py-2 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] shadow hover:bg-[var(--color-primary)] hover:text-[var(--color-background-2)] transition-colors text-lg">
                      Buy me a coffee
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 text-center max-w-xs">
                    Every coffee helps fuel my passion for coding and creating awesome projects!
                  </p>
                </div>
              </div>
            </div>
            {/* Thank You Section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Thank You! 🙏
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                Your support means the world to me and helps me continue building
                innovative solutions and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}