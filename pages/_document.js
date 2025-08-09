import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" data-theme="light">
            <Head />
            <body>
                <Main />
                <NextScript />
                {/* Buy Me a Coffee Widget */}
                <script
                    data-name="BMC-Widget"
                    data-cfasync="false"
                    src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
                    data-id="ermiyas"
                    data-description="Support me on Buy me a coffee!"
                    data-message="Buy me a coffee,"
                    data-color="#5F7FFF"
                    data-position="Left"
                    data-x_margin="18"
                    data-y_margin="18"
                />
            </body>
        </Html>
    )
}