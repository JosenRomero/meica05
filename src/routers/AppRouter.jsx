import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import HashtagsPage from '../pages/HashtagsPage'
import NotFoundPage from '../pages/NotFoundPage '

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="hashtags" element={<HashtagsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )

}

export default AppRouter
