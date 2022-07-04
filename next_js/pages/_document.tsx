import React from 'react';
import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document{

    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {


        return await Document.getInitialProps(ctx)
    }

    render(): JSX.Element {
        return (
            <Html lang={'ru'}>
                <Head>
                    <title>POP</title>
                    <link href={'/account_profile_user_ecommerce_icon_224942.ico'} rel={'icon'}/>
                </Head>
                <body>
                <Main/>
                    <NextScript/>
                </body>

            </Html>
        );
    }


};

export default MyDocument;