import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css';
import GoogleAnalytics from '@bradgarropy/next-google-analytics'
import SEO from '@bradgarropy/next-seo'
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="Home - Niraj Chaurasiya"
        description="Beyond web development, I am also deeply interested in the fields of AI and robotics. I believe that technology has the potential to transform our world in ways we can only imagine, and I am passionate about staying up-to-date with the latest advancements in these areas. From learning about AI and machine learning to exploring the latest trends in robotics, I am always seeking to expand my knowledge and push the boundaries of what is possible."
        keywords={["Niraj", "Niraj Chaurasiya", "Niraj Chaurasiya website", "Nextjs", "Niraj Chaurasia", "Niraj Kumar Chaurasiya", "Niraj Kumar", "Portfolio", "Personal Website"
        ]}
        icon="/logo.jpg"
        themeColor="#000000"
        colorScheme="light"
        facebook={{
          image: "/logo.jpg",
          url: "https://nirajchaurasiya.com",
          type: "website",
        }}
        twitter={{
          image: "/logo.jpg",
          site: "https://nirajchaurasiya.com",
          card: "summary",
        }}
      />
      <GoogleAnalytics measurementId='G-W891NTYQT6' />
      <Navbar />

      <Component {...pageProps} />

    </>

  )
}

export default MyApp
