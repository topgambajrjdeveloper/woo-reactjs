import Head from 'next/head';
import { AppProvider } from "./context/AppContext";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/Style.css';
import client from "./ApolloClient";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';

const Layout = ( props ) => {
	return (
		<AppProvider>
			<ApolloProvider client={ client }>
				<ApolloHooksProvider client={ client }>
					<div>
						<Head>
							<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
							<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
							<title>M&JSoap´s</title>
							<meta name="viewport" content="initial-scale=1.0, width=device-width" />
							<meta name="description" content="Los jabones M&JSoap productos de nuestra línea elaborados con Aceite de Oliva Virgen Extra como base principal además de otros aceites" />
							<meta name="keywords" content="Jabones de aceite 100%, bio y naturales, M&JSoap´s" />
							<meta name="author" content="DevCordenadas" />
							<link rel="icon" type="image/png" href="./clean.png"/>
							<link href="https://fonts.googleapis.com/css2?family=McLaren&display=swap" rel="stylesheet" />
							<link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css" />
						</Head>
						<Header/>
							{ props.children }
						<Footer/>
					</div>
				</ApolloHooksProvider>
			</ApolloProvider>
		</AppProvider>
	);
};

export default Layout;
